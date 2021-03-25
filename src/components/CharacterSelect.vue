<template>
	<div class="container">
		<img v-for="character in characters" 
			:key="character.slug" 
			:src="`/img/${character.slug}Icon.png`"
			v-bind:class="{active: isActive(character.slug)}"
			v-on:click="selected = character.slug"
		/>
	</div>
	<CharacterPreview 
		:key="selectedCharacter.slug" 
		:slug="selectedCharacter.slug" 
		:name="selectedCharacter.name" 
		:blurb="selectedCharacter.blurb"
	></CharacterPreview>
</template>

<script>
import CharacterPreview from './CharacterPreview.vue'


export default{
	data: function (){
		return {
			selected: "sonic"
		}
	},
	components:{
		CharacterPreview
	},
	props:{
		characters: Array
	},
	computed:{
		selectedCharacter(){
			var self = this;
			var result = this.characters.filter(obj => {
				return obj.slug === self.selected
			})
			return result[0];
		}
	},
	methods:{
		isActive(v){
			return v === this.selected;
		}
	}
}
</script>

<style scoped>
	div.container{
		margin-bottom:1em;
	}
	img{
		width: 64px;
		height: 64px;
		border: 4px solid #222;
		margin: 2px
	}

	img.active{
		border:4px solid gold;
	}
</style>
