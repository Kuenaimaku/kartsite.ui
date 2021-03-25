<template>
	<Navbar></Navbar>
	<router-view></router-view>
	<Footer></Footer>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>