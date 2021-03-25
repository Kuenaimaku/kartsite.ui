<template>
		<section class="hero is-primary is-bold">
		<div class="hero-body">
				<p class="title">
				HORNMOD options
				</p>
				<p class="subtitle">
				Click the button and paste into your SRB2Kart Console.
				</p>
			<div class="field is-grouped is-grouped-left">
				<p class="control">
					<input class="input" type="text" placeholder="Filter Horns" v-model="filter.name"/>
				</p>
				<p class="control>">
					<label class="is-checkbox is-danger">
						<input v-model="filter.hellhorns" type="checkbox">
						<span  class="icon checkmark">
							<i class="mdi mdi-check-bold"></i>
						</span>
						<span>Hellhorns</span>
					</label>
				</p>
			</div>
		</div>
	</section>
	<section class="section">
		<HornsList :filter="filter"></HornsList>
	</section>
</template>

<script>
import HornsList from '../components/HornsList.vue'

export default{
	components:{
		HornsList
	},
	data (){ 
		return{
			filter: {
				name: "",
				hellhorns: false
			}
		}
	}
}

</script>


<style scoped>
.icon{
	margin: inherit;
}

figure.image.has-image-centered{
	margin:auto;
}


.has-image-left figure.image{
	margin-right:auto;
}

.has-image-right figure.image{
	margin-left:auto;
}

</style>