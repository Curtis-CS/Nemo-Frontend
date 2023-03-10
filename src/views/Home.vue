<template>
  <div class="Home">
    <section class="bg-white">
      <div class="container px-5 mt-custom">
        <div class="row gx-5 align-items-start justify-content-center justify-content-lg-between min-column-width">
          <div class="col-12 col-lg-5">
            <h2 class="display-7 lh-1 mb-5 mt-5 min-width">Wildfire Smoke Detection</h2>
            <p class="lead fw-normal text-muted mb-5 mb-lg-0">
              The Nemo wildfire smoke detection benchmark is a set of evolving preprocessed datasets in standard
              COCO format and pretrained wildfire smoke detectors based on Facebook AI's DETR that aims to detect
              wildfire in incipient stage (especially the first few minutes from start of wildfire). This model is
              created for object detection. It has a CNN backbone along with encoder-decoder transformers. It also
              uses bipartite matching loss function.
            </p>
            <UploadFiles/>
          </div>
          <div class="col-sm-8 col-md-6">
            <figure>
              <img alt="..." class="img-thumbnail mt-5" src="/nemo_smokeV3.png">
              <figcaption class="figure-caption mt-3">
                <b>Figure 1:</b> Annotated frame with confirmed smoke detection and estimated density.
              </figcaption>
            </figure>
            <figure>
              <img alt="..." class="img-thumbnail mt-5" src="/nemo_smokeV2..png">
              <figcaption class="figure-caption mt-3">
                <b>Figure 2:</b> Annotated frame with confirmed smoke detection and estimated density.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UploadFiles from "@/components/UploadFiles.vue";

export default {
  name: "Home",
  components: {UploadFiles}
}
</script>

<style scoped>
.mt-custom {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.min-column-width {
  min-width: 530px;
}

.min-width {
  min-width: 407px;
}
</style>