<template>
		<nav class="navbar is-primary">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://mb.srb2.org/threads/srb2kart.25868/">
				<img src="./../assets/logo.png" alt="SRB2Kart Logo" width="28" height="50">
				<span>SRB2Kart</span>
			</a>

			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<router-link to="/" class="navbar-item">Home</router-link>
				<router-link to="/manual" class="navbar-item">How To Play</router-link>
				<router-link to="/horns" class="navbar-item">Horns</router-link>
			</div>
		</div>
	</nav>
</template>

<style scoped>

.navbar-item img{
	margin-right: 0.5rem;
}

</style>