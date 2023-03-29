<template>
  <section class="bg-white">
    <div class="container px-5 mt-custom max-column-width min-column-width">
      	<div class="Results">
		      <Lightbox :images="images"/>
	      </div>
    </div>
  </section>
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
      ],
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