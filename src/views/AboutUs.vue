<template>
  <section class="bg-white">
    <div class="container px-5 mt-custom">
      <div class="InitialPadding">
        <p class="display-5 lh-1 mb-5" style="margin-left: 0vw; text-align: center; font-size: 2.5vw;">Nemo Interface: Wildfire Smoke Detection</p>
      </div>
      <div class="OtherPadding">
        <p class="fw-normal mb-lg-0" style=" text-align: center; padding-bottom: 10px">
          CS 426 Senior Project, Spring 2023, Computer Science and Engineering at University of Nevada Reno
        </p>
        <p class="fw-bold mb-5 mb-lg-0" style=" text-align: center; padding-bottom: 10px">
          Team #15
        </p>
        <p class="fw-normal text-muted mb-5 mb-lg-0" style=" text-align: center; padding-bottom: 10px">
          Curtis Burchfield | Ian Ayers | Michael Moosmuller
        </p>
        <p class="fw-normal text-muted mb-5 mb-lg-0" style=" text-align: center; font-size: 1vw; padding-bottom: 10px">
          cburchfield@unr.edu | iayers@unr.edu | mmoosmuller@unr.edu
        </p>

        <p class="fw-bold mb-5 mb-lg-0" style=" text-align: center; font-size: 2vw; padding-bottom: 10px">
          Abstract
        </p>
        <div class = "AbstractPadding" style="align-self: center">
          <p class="fw-normal text-muted mb-5 mb-lg-0" style=" text-align: justify; padding-bottom: 10px">
            Deep-learning (DL) based object detection algorithms are beneficial to areas of climate science involving wildfire
        prevention, observation, and intelligence. As wildfires become more prevalent, the need for advanced techniques
        in processing video feeds has become crucial for smoke detection. Existing DL-based techniques have been
        developed based on convolution networks and are proven to be effective in wildfire detection. However, these
        datasets are primarily commercial and/or closed-sourced. One of the few open-source models is Nemo, a benchmark
        for fine-grained wildfire smoke detection in the incipient stage of a wildfire. Using this model as a basis, our
        team intends to collaborate with its authors to build a convenient user interface and refined data preprocessing
        for accurately detecting wildfire smoke in adverse weather or nighttime conditions.
          </p>
        </div>
        <p class="fw-bold mb-5 mb-lg-0" style=" text-align: center; padding-bottom: 10px">
          Instructors
        </p>
        <p class="fw-normal text-muted mb-5 mb-lg-0" style=" text-align: center; padding-bottom: 10px">
          David Feil-Seifer | Devrin Lee
        </p>
        <p class="fw-bold mb-5 mb-lg-0" style=" text-align: center; padding-bottom: 10px">
          Advisors
        </p>
        <p class="fw-normal text-muted mb-5 mb-lg-0" style=" text-align: center; padding-bottom: 10px">
          Dr.Lei Yang | Amirhesam Yazdi
        </p>
        <p class="fw-normal text-muted mb-5 mb-lg-0" style=" text-align: center; font-size: 1.1vw; padding-bottom: 10px">
          Dr. Lei Yang: Associate Professor at UNR in Computer Science and Engineering
        </p>
        <p class="fw-normal text-muted mb-5 mb-lg-0" style=" text-align: center; font-size: 1.1vw; padding-bottom: 10px">
          Amirhesam Yazdi: PhD graduate in Computer Science and Engineering, under advisement from
          Dr. Feng Yan and Dr. Lei Yang
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
/* Initial padding of Top Menu bar */
.InitialPadding {
	padding-top: 75px;
}

.OtherPadding {
  padding-bottom: 5px;
  font-size: 1.25vw;
}

.AbstractPadding {
  padding-top: 3px;
  width: 75vw;
  height: 14vw;
}
</style>