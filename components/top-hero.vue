<template>
  <v-container fluid fill-height class="hero">
    <v-layout justify-center align-center column pa-5>
      <div class="mt-8 display-3 font-weight-black white--text text-center">
        Os-Window
      </div>
      <div class="display-2 font-weight-black white--text text-center mb-3">
        Web Component
      </div>
      <div class="display-1 font-weight-bold white--text text-center">
        Interactive application windows for your website
      </div>
      <div>
        <v-btn
          color="white"
          class="mt-8 mr-1"
          type="button"
          to="#gettingstarted"
          large
          nuxt
          data-track-label="hero-primary"
          :data-track-config="JSON.stringify(trackingConfig)"
        >
          Get started
        </v-btn>
        <v-btn
          color="white"
          class="mt-8 ml-1"
          type="button"
          to="#demo"
          outlined
          large
          nuxt
          data-track-label="hero-secondary"
          :data-track-config="JSON.stringify(trackingConfig)"
        >
          Try it!
        </v-btn>
      </div>
      <div
        class="d-flex align-self-end mt-8"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.npmjs.com/package/os-window"
          data-track-label="hero-npmjs"
          :data-track-config="JSON.stringify(trackingConfig)"
        >
          <img src="https://img.shields.io/npm/v/os-window" alt="npm Version" data-canonical-src="https://img.shields.io/npm/v/os-window" style="max-width:100%;">
        </a>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'TopHero',
  data () {
    return {
      trackingConfig: {
        mouseover: ['interaction', 'hero-interaction'],
        mouseout: ['interaction', 'hero-interaction'],
        focus: ['interaction', 'hero-interaction'],
        focusout: ['interaction', 'hero-interaction'],
        click: ['interaction', 'hero-interaction']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    background: #ffba36;
    box-shadow: inset 0px -2px 4px -1px rgba(0, 0, 0, 0.2), inset 0px -4px 5px 0px rgba(0, 0, 0, 0.14), inset 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
  }
</style>
