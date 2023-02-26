<template>
	<div class="Results" style="padding-bottom: 3rem;">
		<Lightbox :images="images"/>
	</div>
</template>

<script>
import Lightbox from "@/components/Lightbox.vue"
export default {
  name: "Results",
  components: {
	Lightbox,
  },
  data() {
	return {
		//Just an array of images
		images: [
			'/TumbleWeed_fire_CA_2021Jul.png', '/CaughlinRanch_PineHaven_fire_Nov2020.png',
			'/neat.gif', '/TumbleWeed_fire_CA_2021Jul.png',
			'/CaughlinRanch_PineHaven_fire_Nov2020.png', '/TumbleWeed_fire_CA_2021Jul.png', 
			'/CaughlinRanch_PineHaven_fire_Nov2020.png', '/thumbsUp.gif'
		]
	}
  }
}
</script>
<style scoped>


</style>