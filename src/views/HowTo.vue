<template>
  <section class="bg-white">
    <div class="container px-5 mt-custom">
      <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
        <div class="Padding">
          <h2 class="display-6 lh-1 mb-5">How To Use</h2>
          <p class="lead fw-bold mb-5 mb-lg-0" style="float: left; padding-bottom: 5vw">
            Step: 1 - Uploading Data
          </p>
          <div style="float: left; padding-top: 2vw; padding-bottom: 2vw;">
            <img class="Images" src="/emptyUpload.png">
          </div>
          <p class="lead fw-normal text-muted mb-5 mb-lg-0" style="float: left; padding-bottom: 10px">
            Press "Choose Files" or drag and drop a file into the dropbox.
          </p>
          <p class="lead fw-bold mb-5 mb-lg-0" style="float: right; padding-top: 5vw; padding-bottom: 5vw">
            Step: 2 - Running the Model
          </p>
          <div style="float: right; padding-top: 7vw; padding-bottom: 2vw">
            <img class="Images" src="/nemoUpload.png">
          </div>
          <p class="lead fw-normal text-muted mb-5 mb-lg-0" style="float: right; padding-bottom: 5vw">
            Once you've uploaded your image(s), you should see the files you selected in the drop box as well as a
            "Run" button. Press this button once you have confirmed that the images you uploaded are what you want
            to have run through the model.
          </p>
          <p class="lead fw-bold mb-5 mb-lg-0" style="float: left; padding-bottom: 10px">
            Step: 3 - Get Results
          </p>
          <div style="float: left; padding-top: 2vw; padding-bottom: 2vw">
            <img class="Images" src="/nemoResults.png">
          </div>
          <p class="lead fw-normal text-muted mb-5 mb-lg-0" style="float: left; padding-bottom: 10px; padding-top: 5px">
            Wait patiently for NEMOs response, and view the results!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
.Padding {
  padding-bottom: 5px;
  font-size: 1vw;
}

.Images {
  width: 30vw;
  height: auto;
}
</style>