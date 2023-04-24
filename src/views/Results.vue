<template>
  <section class="bg-white">
    <div class="container px-5 mt-custom max-column-width min-column-width" v-if="checkResults()">
      <h2>No Results Received.</h2>
    </div>
    <div v-else>
      <Lightbox/>
    </div>
  </section>
</template>

<script>
import { store } from "../store"
import Lightbox from "../components/Lightbox.vue"
export default {
  name: "Results",
  components: {
	  Lightbox,
  },
  methods: {
    //Checks if there are any results yet
    checkResults() {
      return store.state.result_images.length === 0;
    }
  }
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