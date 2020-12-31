<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  head: {
    title: {
      inner: 'ポートフォリオ',
      separator: '|',
      complement: '中村拡幹'
    }
  },
  meta: [
    {
      name: 'description', 
      content: '中村拡幹のポートフォリオ'
    },
    { 
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,user-scalable=no' 
    },
    {
      charset: 'utf-8'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  script: [
    {
      type: 'text/javascript',
      src: "https://code.jquery.com/jquery-3.5.1.js",
      integrity: "sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=",
      crossorigin: "anonymous",
      async: true
    }
  ],

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
}
</style>
