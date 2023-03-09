<template>
	<div class="Results" style="padding-bottom: 3rem;">
		<Lightbox :images="images"/>
	</div>
<!--  <div>-->
<!--    <img :src="imageSrc" alt=""/>-->
<!--  </div>-->
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
        '/nemo_smokeV2..png', '/nemo_smokeV3.png',
        '/nemo_wildfiresmoke..png', '/nemo_smokeV2..png', '/nemo_smokeV3.png',
        '/nemo_wildfiresmoke..png', '/thumbsUp.gif',
      ]
    }
  },
  // computed: {
  //   imageSrc() {
  //     let files = this.$store.getters.result_files
  //     if (files) {
  //         return URL.createObjectURL(files[0])
  //     }
  //   }
  // }
}
</script>
<style scoped>


</style>