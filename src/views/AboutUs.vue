<template>
  <section class="bg-white">
    <div class="container px-5 mt-custom max-column-width min-column-width">
      <div class="row gx-5 align-items-start justify-content-center justify-content-lg-between">
        <h2 class="text-center lh-1 mt-6 mb-5">Nemo Interface: Wildfire Smoke Detection</h2>
        <h5 class="fw-bold mb-lg-4 mt-4 text-center"> Team #15 </h5>
        <p class="fw-normal text-muted text-center mb-lg-2">
          Curtis Burchfield | Ian Ayers | Michael Moosmuller
        </p>
        <p class="fw-normal text-muted text-center mb-lg-4">
          cburchfield@unr.edu | iayers@unr.edu | mmoosmuller@unr.edu
        </p>
        <p class="fw-normal text-muted text-center mb-lg-0">
          CS 426 Senior Project <br>
          Computer Science and Engineering (CSE) <br>
          University of Nevada Reno (UNR) <br>
          Spring 2023 <br>
        </p>
      </div>
      <div class="row gx-5 align-items-start justify-content-center justify-content-lg-between mt-5">
        <h5 class="fw-bold text-center lh-1 mb-4 mt-5 min-width"> Abstract </h5>
        <p class="fw-normal text-muted text-center mb-5 mb-lg-0">
          Deep-learning (DL) based object detection algorithms are beneficial to areas of climate science involving
          wildfire prevention, observation, and intelligence. As wildfires become more prevalent, the need for
          advanced techniques in processing video feeds has become crucial for smoke detection. Existing DL-based
          techniques have been developed based on convolution networks and are proven to be effective in wildfire
          detection. However, these datasets are primarily commercial and/or closed-sourced. One of the few open-source
          models is Nemo, a benchmark for fine-grained wildfire smoke detection in the incipient stage of a wildfire.
          Using this model as a basis, our team intends to collaborate with its authors to build a convenient user
          interface and refined data preprocessing for accurately detecting wildfire smoke in adverse weather or
          nighttime conditions.
        </p>
      </div>
      <div class="row gx-5 align-items-start justify-content-center justify-content-lg-between">
        <h5 class="fw-bold text-center lh-1 mb-4 mt-5 min-width"> Instructors </h5>
        <p class="fw-normal text-muted text-center mb-lg-4">
          David Feil-Seifer | Devrin Lee
        </p>
        <h5 class="fw-bold text-center lh-1 mb-4 mt-5 min-width"> Advisors </h5>
        <p class="fw-normal text-center text-muted mb-5 mb-lg-4">
          Dr.Lei Yang | Amirhesam Yazdi
        </p>
        <p class="fw-normal text-center text-muted mb-5 mb-lg-0">
          Dr. Lei Yang: Associate Professor at UNR in CSE.
        </p>
        <p class="fw-normal text-center text-muted mb-5 mb-lg-0">
          Amirhesam Yazdi: PhD graduate in CSE, advised by Dr. Feng Yan and Dr. Lei Yang
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>
.mt-custom {
  margin-top: 6rem;
  margin-bottom: 6rem;
}
</style>