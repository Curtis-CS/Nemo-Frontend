<template>
  <div class="HowTo">
    <section class="bg-light custom-title">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-9">
            <h2 class="display-6 text-center">How To Use</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white mt-custom" style="text-align: center; padding-top: 1vw; padding-bottom: 2vw;">
      <video controls style="width: 70vw; height: auto; background-color: gray; border-style: solid;">
        <source src="/NemoInterfaceHowToUse.mp4" type="video/mp4">
        <source src="/NemoInterfaceHowToUse.ogx" type="video/ogg">
        Unfortunately your browser does not support the video tag.
        The simple steps to use the Website are go to the home page/Run Nemo page, and simply upload some images and hit
        run.
      </video>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HowTo'
}
</script>

<style scoped>
</style>