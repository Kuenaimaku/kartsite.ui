<template>
  <Navbar/>
  <section class="hero-main hero is-large is-info is-video">
    <div class="hero-video">
      <video playsinline autoplay muted loop>
        <source src="/video/background.mp4" type="video/mp4">
      </video>
    </div>
    <div class="hero body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <h1 class="title">Gone Kartin'</h1>
            <h2 class="subtitle">SRB2Kart is a classic styled kart racer, complete with beautiful courses, and wacky items.</h2>
            <a class="button is-large is-info is-inverted" href="https://github.com/STJr/Kart-Public/releases">Play Now</a>
          </div>
          <div class="column logo">
              <img src="./assets/splash.png">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section about">
    <div class="container has-text-centered">
      <h2 class="title">Features</h2>
      <div class="columns">
        <div class="column is-one-third">
          <span class="icon has-text-success">
            <i class="mdi mdi-96px mdi-map"></i>
          </span>
          <p>We have 100 jam-packed maps for you to bump, explode, and sparkle your way through, from luscious beaches, to Eggman’s dance floor, to England on a good day. All lovingly crafted by many different people.</p>
        </div>
        <div class="column is-one-third">
          <span class="icon has-text-warning">
            <i class="mdi mdi-96px mdi-star-circle-outline"></i>
          </span>
          <p>You’ll notice almost every aspect of the game has an immense love and inspiration from the classic sonic games. From the items such as Ballhog, which literally throws bouncey explodey balls at people, to the maps which are bursting with that Sonic feel.</p>
        </div>
        <div class="column">
          <span class="icon has-text-danger">
            <i class="mdi mdi-96px mdi-robot-angry"></i>
          </span>
          <p>Of course, you'll only start off with a few cups available, but you can unlock more by playing offline/online matches. Alternatively, you can immediately jump into challenging yourself and race us personally in Staff Attack mode! Don't worry, we'll go easy on you.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section characters">
    <div class="container has-text-centered">
      <h2 class="title">Characters</h2>
      <CharacterSelect :characters="characters"/>
    </div>
  </section>
  <section class="section modes">
    <div class="container has-text-centered">
      <h2 class="title">Game Modes</h2>
      <div class="columns">
        <div class="column is-half">
          <div class="box has-text-centered">
            <span class="icon has-text-info">
              <i class="mdi mdi-96px mdi-flag-checkered"></i>
            </span>
            <h3 class="title">Race</h3>
            <p class="subtitle">Race through the track to beat your opponents, use your items and skill to swooce past the competition, Oh my God what is that following behind me HELP! You know, the usual.</p>
          </div>
        </div>
        <div class="column">
          <div class="box has-text-centered">
            <span class="icon has-text-danger">
              <i class="mdi mdi-96px mdi-sword-cross"></i>
            </span>
            <h3 class="title">Battle</h3>
            <p class="subtitle">Battle mode asks you to violently throw spikeballs at your friends until they have no bumpers and you have some. But watch out, they can come back with a vengeance and chase you to the ends of the earth afterwards!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CharacterSelect from './components/CharacterSelect.vue'

export default{
  components:{
    Navbar,
    CharacterSelect,
    Footer
  },
  data (){ 
    return{
      publicPath: process.env.BASE_URL,
      characters:[
        {slug: "sonic", name:"Sonic", blurb:"Sonic is just what you’d expect from our favorite blue hero! Pretty fast and agile! He’s got some good speed, and can control his drifts pretty well, just make sure you get the drift boosts because otherwise you’ll fall behind!"},
        {slug: "tails", name:"Tails", blurb:"Our cute fox boy Tails! Tails has slow speed, but can really get going quickly, he can also take incredibly tight turns all the time, get close to those corners for him to really slip past people!"},
        {slug: "knuckles", name:"Knuckles", blurb:"Here he comes, tougher than the rest of them. Knuckles is average in both stats, he’s very balanced, and likely a good pick if you don’t know who to try first!"},
        {slug: "eggman", name:"Dr. Eggman", blurb:"Ohohohohoho! Eggman has come along to steal the competition! He’s quite slow though, so take advantage of his fast drift-spark rate and his immense weight to stop others from overtaking!"},
        {slug: "metalsonic", name:"Metal Sonic", blurb:"*Loud Angry Robot Noises* Metal Sonic is fast, and heavy. He’ll fly through the courses if given the chance, but his cornering leaves much to be desired…"},
      ]
    }
  }
}
</script>

<style lang="scss">
  @charset "utf-8";
  @import "../node_modules/bulma/bulma.sass";
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar-brand span{
  font-size:1.5em;
  font-weight:800;
  font-family: 'VT323', monospace;
}

.hero.body{
  background-color: RGBA(0,0,0,0.8);
  z-index:1;
}


.hero-main h1.title{
  font-family: 'VT323', monospace;
  margin-top:220px;
  font-size: 3rem;
  font-weight: 800;
  line-height: 4rem;
}

.hero-main h2.subtitle{
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
}

section{
  background-color: #f6f6f6;
  position:relative;
  z-index:1;
}

section.about, section.modes, section.characters{
  padding:2rem;
}


section.characters{
  background-color:#39f;
}

section.characters .title{
  color:white;
}


section.about h2.title, section.modes h2.title, section.characters h2.title{
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
}

section.about h2.title{
  margin-bottom: 4rem;
}

section.modes h3.title{
  font-family: 'VT323', monospace;
  font-size:3rem;
}

.mdi-96px.mdi-set, .mdi-96px.mdi:before {
    font-size: 96px;
}

section.modes .box{
  min-height:253px;
}
</style>