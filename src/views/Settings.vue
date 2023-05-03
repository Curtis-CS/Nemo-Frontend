<template>
  <div class="ConfigureNemo">
    <!--    Title Section-->
    <section class="bg-light custom-title">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-11">
            <h2 class="display-6 text-center">Settings</h2>
          </div>
        </div>
      </div>
    </section>
    <!--    Model Settings Section-->
    <section class="bg-white">
      <div class="container mt-custom">
        <h3 class="card-title text-left display-7 mt-3 card-title-left-margin">Smoke Detection Models</h3>
        <div class="row row-width mt-5">
          <!--          Single Class Detection-->
          <div class="col-lg-4 bg">
            <div class="card card-dimensions">
              <div class="card-body card-body-dimensions">
                <h5 class="card-title display-7 mt-2">Single Class Detection</h5>
                <div class="border-top mt-4">
                  <img alt="Image with bounding boxes detecting smoke in two locations." class="image mt-4"
                       src="/NemoSingleClass.png"/>
                  <p class="text-justify mt-4">
                    Single Class detection will only deliver results of either true or
                    false. This being yes or no to whether or not wildfire smoke was detected.
                  </p>
                </div>
                <div class="row body-width mt-3 border-top">
                  <div class="col-lg-10"/>
                  <div class="col-lg-2">
                    <div class="form-check form-switch mt-4">
                      <input
                          id="buttonSCD"
                          v-model="typeToggle"
                          class="form-check-input switch-size"
                          name="modelSelectionButton"
                          type="radio"
                          value="true"
                          @click="setSCD()"
                      >
                      <label class="form-check-label" for="buttonSCD"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 align-content-center"/>
          <!--          Density Detection-->
          <div class="col-lg-4 bg">
            <div class="card card-dimensions">
              <div class="card-body card-body-dimensions">
                <h5 class="card-title display-7 mt-2">Density Detection</h5>
                <div class="border-top mt-4">
                  <img alt="Image with bounding boxes detecting smoke in two locations." class="image mt-4"
                       src="/NemoDensity.png"/>
                  <p class="text-justify mt-4">
                    Density Detection will detect wildfire smoke, and provide an estimate to how dense the smoke is.
                    This can be helpful for studying wildfire smoke.
                  </p>
                </div>
                <div class="row body-width mt-3 border-top">
                  <div class="col-lg-10"/>
                  <div class="col-lg-2">
                    <div class="form-check form-switch mt-4">
                      <input
                          id="buttonDD"
                          v-model="typeToggle"
                          class="form-check-input switch-size"
                          name="modelSelectionButton"
                          type="radio"
                          value="false"
                          @click="setDD()">
                      <label class="form-check-label" for="buttonDD"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 align-content-center"/>
        </div>
      </div>
    </section>
    <!--    Advanced Settings-->
    <section class="bg-white">
      <div class="container mt-custom">
        <h3 class="card-title text-left display-7 mt-2 card-title-left-margin">Advanced Settings</h3>
        <div class="card mt-5 advanced-width">
          <div class="card-body">
<!--            Attention Weights-->
            <div class="row line-width mt-4">
              <div class="col-lg-8">
                <h5 class="card-title display-7 mt-1">Encoder-Decoder Attention Weights</h5>
                <p class="text-justify mt-4">
                  Density Detection will detect wildfire smoke, and provide an estimate to how dense the smoke is.
                  This can be helpful for studying wildfire smoke.
                </p>
              </div>
              <div class="col-lg-2"/>
              <div class="col-lg-2">
                <div class="form-check form-switch">
                  <input
                      id="flexSwitchCheckChecked"
                      v-model="extraOption1"
                      class="form-check-input switch-size switch-bounds"
                      type="checkbox"
                      @click="setExtraOption1()"
                  >
                  <label class="form-check-label" for="flexSwitchCheckChecked"/>
                </div>
              </div>
            </div>
<!--            NMSUP-->
            <div class="row line-width mt-4 border-top">
              <div class="col-lg-8">
                <h5 class="card-title display-7 mt-4">NMSUP</h5>
                <p class="text-justify mt-4">
                  Nonmax suppression. A technique that filters proposals for classification based on a criteria.
                </p>
              </div>
              <div class="col-lg-1"/>
              <div class="col-lg-2 ">
                <div class="form-group">
                  <label for="NMSUP_Value"/>
                  <select
                      class="form-control text-input-bounds"
                      id="NMSUP_Value"
                      @mouseleave="setExtraOption2()">
                    <option>0.1</option>
                    <option>0.2</option>
                    <option>0.3</option>
                    <option>0.4</option>
                    <option>0.5</option>
                    <option>0.6</option>
                    <option>0.7</option>
                    <option>0.8</option>
                    <option>0.9</option>
                    <option>1.0</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-1"/>
            </div>
<!--            IOU Threshold-->
            <div class="row line-width mt-4 border-top">
              <div class="col-lg-8">
                <h5 class="card-title display-7 mt-4">IOU Threshold</h5>
                <p class="text-justify mt-4">
                  The intersection over union is used to evaluate object detection algorithms. It measures the overlap
                  between predicted bounding boxes and the associated ground truth boxes.
                </p>
              </div>
              <div class="col-lg-1"/>
              <div class="col-lg-2">
                <div class="form-group">
                  <label for="IOU_Value"/>
                  <select
                      class="form-control text-input-bounds"
                      id="IOU_Value"
                      @mouseleave="setExtraOption3()">
                    <option>0.1</option>
                    <option>0.2</option>
                    <option>0.3</option>
                    <option>0.4</option>
                    <option>0.5</option>
                    <option>0.6</option>
                    <option>0.7</option>
                    <option>0.8</option>
                    <option>0.9</option>
                    <option>1.0</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UploadFiles from "../components/UploadFiles.vue";
import {store} from "@/store"

export default {
  name: "ConfigureNemo",
  components: {UploadFiles},
  data() {
    return {
      typeToggle: store.state.single_class_option,        // True for single class, false for density
      extraOption1: store.state.attention_weights_option,
      extraOption2: store.state.nmsup_option,
      extraOption3: store.state.iou_threshold_option
    }
  },
  methods: {
    setExtraOption1() {
      store.state.attention_weights_option = this.extraOption1 !== true;
    },
    setExtraOption2() {
      let e = document.getElementById("NMSUP_Value")
      store.state.nmsup_option = e.value;
    },
    setExtraOption3() {
      let e = document.getElementById("IOU_Value")
      store.state.iou_threshold_option = e.value;
    },
    setDD() {
      this.typeToggle = false
      store.state.single_class_option = this.typeToggle
      console.log(store.state.single_class_option)
    },
    setSCD() {
      this.typeToggle = true
      store.state.single_class_option = this.typeToggle
      console.log(store.state.single_class_option)
    },
  }
}
</script>

<style scoped>

.advanced-width {
  width: 1112px;
}

.body-width {
  width: 450px;
}

.card-body-dimensions {
  margin: 1rem;
}

.card-dimensions {
  width: 32rem;
}

.image {
  height: 15rem;
  width: 28rem;
}

.line-width {
  width: 1102px;
}

.row-width {
  width: 1200px;
}

.switch-size {
  transform: scale(1.8);
}

.switch-bounds {
  transform: scale(1.8);
  margin-top: 3rem;
  margin-left: 4rem;
}

.text-input-bounds {
  margin-right: 5rem;
  margin-top: 2rem;
}

</style>