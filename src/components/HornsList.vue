<template>
	<div class="container">
		<div class="content">
			<HornListItem v-for="horn in filterHorns" v-bind:key="horn.name" :horn="horn"></HornListItem>
		</div>
	</div>
</template>


<script>
import HornListItem from './HornListItem.vue';
import json from "./../assets/json/horns.json";
export default {
	components:{
		HornListItem
	},
	props:{
		filter: Object
	},
	data() {
		return {
			horns: json,
		};
	},	
	computed:{
			filterHorns() {
				const search = this.filter.name.toLowerCase().trim();
				return this.horns.filter(c => {
					if(this.filter.hellhorns){
						return c.name.toLowerCase().indexOf(search) > -1 && c.hellhorn == true
					}
					return c.name.toLowerCase().indexOf(search) > -1 && c.hellhorn == false
					});
			}
	}
};
</script>