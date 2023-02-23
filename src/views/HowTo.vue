<template>
  <section class="bg-white">
      <div class="container px-5 mt-custom">
        <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
          <div class="col-12 col-lg-5">
            <h2 class="display-6 lh-1 mb-5">How To Use</h2>
            <p class="lead fw-normal text-muted mb-5 mb-lg-0">
              The Nemo wildfire smoke detection system is hoping to expand and improve over time.
              We could use any assistance in furthering the devolopment of Nemo. We are accepting 
              labeled data to help improve our model. Please upload your labeled data for us to use 
              to further train the Nemo model. Thank you  
            </p>
            <UploadFiles/>
          </div>
          <div class="col-sm-8 col-md-6">
            <figure>
              <img alt="..." class="img-thumbnail mt-5" src="/CaughlinRanch_PineHaven_fire_Nov2020.png">
              <figcaption class="figure-caption mt-3">
                <b>Figure 1:</b> Annotated frame with confirmed flame detection.
              </figcaption>
            </figure>
            <figure>
              <img alt="..." class="img-thumbnail mt-5" src="/TumbleWeed_fire_CA_2021Jul.png">
              <figcaption class="figure-caption mt-3">
                <b>Figure 2:</b> Annotated frame with confirmed fire detection.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  
  import UploadFiles from "@/components/UploadFiles.vue";
  
  export default {
    name: "HowTo",
    components: {UploadFiles}
  }
  </script>
  
  <style scoped>
  
  </style>