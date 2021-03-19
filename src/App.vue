<template>
  <Navbar/>
  <router-view>
  </router-view>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default{
  components:{
    Navbar,
    Footer
  },
  data (){ 
    return{
    }
  }
}
</script>

<style lang="scss">
  @charset "utf-8";

  $lavender: hsl(275, 20%, 50%);
  $primary: $lavender;
  $scheme-main: hsl(275, 5%, 15%);
  $scheme-main-bis:hsl(275, 5%, 12%);
  $scheme-main-ter:hsl(275, 5%, 15%);;
  $body-background-color: hsl(275, 5%, 10%);

$scheme-invert: hsl(275, 5%, 00%);

  $text: hsl(0, 0%, 80%);
  $text-strong: hsl(0, 0%, 90%);
  $background: hsl(275, 5%, 10%);
  $body-color: hsl(0, 0%, 80%);

  @import "../node_modules/bulma/bulma.sass";
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>