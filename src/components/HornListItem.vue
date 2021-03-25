<template>
	<article class="media box">
			<button class="button is-info media-left" :disabled="horn.hellhorn" @click="updateClipboard(horn.command)">
				<span class="icon is-medium">
					<i class="mdi mdi-content-copy"></i>
				</span>
				<span>Copy to Clipboard</span>
			</button>

		<div class="media-content">
			<div class="content">
				<p>
					<h6>{{horn.name}}</h6>
					<em>{{horn.pack}}</em>
				</p>
			</div>
		</div>
		<div class="media-right">
			<span class="icon has-text-danger">
				<i v-if="horn.hellhorn" i class="mdi mdi-36px mdi-grave-stone"></i>
			</span>
		</div>
	</article>
</template>
<script>
export default {
	props: ["horn"],
	data (){ 
		return{
		}
	},
	methods:{
		updateClipboard(newClip) {
			navigator.clipboard.writeText(newClip).then(function() {
				/* clipboard successfully set */
			}, function() {
				/* clipboard write failed */
			});
		}
	}
}

</script>

<style lang="scss" scoped>
.icon{
	margin: inherit;
}

.content h6{
	margin-bottom:0;
}
</style>