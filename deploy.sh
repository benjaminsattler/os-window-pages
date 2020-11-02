#!/bin/sh

set -euxo pipefail

PAGES_BRANCH="${PAGES_BRANCH:-gh-pages}"
BUILD_BRANCH="${BUILD_BRANCH:-master}"
FULL="${FULL:-0}";


SCRIPTPATH=$(realpath $(dirname $0))
if [[ $(git -C "${SCRIPTPATH}" branch --show-current) == "${PAGES_BRANCH}" ]]; then
  echo Please move to branch other than "${PAGES_BRANCH}"
  exit
fi

NOW=`date "+%s"`
WORKDIR="$(echo $TMPDIR)os-window-pages-build-${NOW}/"
echo "setting up temporary worktree in ${WORKDIR}"
git -C "${SCRIPTPATH}" worktree prune
git -C "${SCRIPTPATH}" worktree add -f $WORKDIR "${BUILD_BRANCH}"
yarn --cwd "${WORKDIR}"
yarn --cwd "${WORKDIR}" generate
rm -rf "${WORKDIR}"node_modules
git -C "${WORKDIR}" stash -a
git -C "${WORKDIR}" checkout -f "${PAGES_BRANCH}"
git -C "${WORKDIR}" stash pop
cp -r "${WORKDIR}"/dist/* "${WORKDIR}"
rm -rf "${WORKDIR}"dist
git -C "${WORKDIR}" clean -dfX
git -C "${WORKDIR}" add -A
git -C "${WORKDIR}" commit -m "new deploy"
git -C "${SCRIPTPATH}" worktree remove -f $WORKDIR

if [[ "${FULL}" == "1" ]]; then
  git -C "${SCRIPTPATH}" push origin "${PAGES_BRANCH}":"${PAGES_BRANCH}"
  exit 0
fi

set +x
echo "Please push the new release manually using"
echo "> git -C ${SCRIPTPATH} push origin ${PAGES_BRANCH}:${PAGES_BRANCH}"
echo "Or preview the new release using"
echo "> git -C ${SCRIPTPATH} checkout ${PAGES_BRANCH}"
