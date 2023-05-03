<template>
  <!--    Title Section-->
  <section class="bg-light custom-title">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <h2 class="display-6 text-center">Results</h2>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white">
    <Lightbox/>
  </section>
</template>

<script>
import Lightbox from "../components/Lightbox.vue"

export default {
  name: "Results",
  components: {
    Lightbox,
  }
}
</script>
