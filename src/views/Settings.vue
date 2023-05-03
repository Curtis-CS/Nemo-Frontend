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
                  <img src="/NemoSingleClass.png" class="image mt-4" alt="Image with bounding boxes detecting smoke in two locations."/>
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
                          class="form-check-input switch-size"
                          type="radio"
                          name="modelSelectionButton"
                          id="buttonSCD"
                          value="true"
                          v-model="typeToggle"
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
                  <img src="/NemoDensity.png" class="image mt-4" alt="Image with bounding boxes detecting smoke in two locations."/>
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
                          class="form-check-input switch-size"
                          type="radio"
                          name="modelSelectionButton"
                          id="buttonDD"
                          value="false"
                          v-model="typeToggle"
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
        <h3 class="card-title text-left display-7 mt-3 card-title-left-margin">Advanced Settings</h3>
          <div class="card mt-4">
            <div class="card-body">
              <div class="row row-width mt-4">

                <div class="col-lg-8">
                  <h5 class="card-title display-7 mt-2">Encoder-Decoder Attention Weights</h5>
                  <p class="text-justify mt-4">
                    Density Detection will detect wildfire smoke, and provide an estimate to how dense the smoke is.
                    This can be helpful for studying wildfire smoke.
                  </p>
                </div>
                <div class="col-lg-2"/>
                <div class="col-lg-2">
                  <div class="form-check form-switch">
                    <input
                        class="form-check-input switch-size2"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        v-model="extraOption1"
                        @click="setExtraOption1()"
                    >
                    <label class="form-check-label" for="flexSwitchCheckChecked"/>
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
      SCD_Settings_Button: false,
      DD_Settings_Button: false,
      typeToggle: store.state.single_class_option,        // True for single class, false for density
      moreOptions: store.state.more_options_toggle,
      extraOption1: store.state.attention_weights_option,
      extraOption2: false
    }
  },
  methods: {
    setExtraOption1() {
      store.state.attention_weights_option = this.extraOption1 !== true;
    },
    setSCD() {
      this.typeToggle = true
      store.state.single_class_option = this.typeToggle
      console.log(store.state.single_class_option)
    },
    setDD() {
      this.typeToggle = false
      store.state.single_class_option = this.typeToggle
      console.log(store.state.single_class_option)
    },
  }
}
</script>

<!-- This is all of our styling using bootstrap/css -->
<style scoped>
/* Initial padding of Top Menu bar */
.image {
  height: 15rem;
  width: 28rem;
}

.card-dimensions {
  width: 32rem;
}

.card-body-dimensions {
  margin: 1rem;
}

.row-width {
  width: 1200px;
}

.body-width {
  width: 450px;
}

.base-button {
  color: blue;
  border-radius: 25px;
  border-style: solid;
  border-color: white;
  border-width: thin;
  padding-right: 20px;
  /*padding-left: 20px;*/
  background-color: #ffffff;
  height: 34px;
}

.switch-size {
  transform: scale(1.8);
}

.switch-size2 {
  transform: scale(1.8);
  margin-top: 3rem;
}

</style>