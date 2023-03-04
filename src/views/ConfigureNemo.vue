<template>
  <section class="bg-white">
    <div class="container px-5 mt-custom">
      <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between min-column-width">
        <h2 class="display-6 lh-1 mb-5">Configure Nemo</h2>


        <div class="col-12 col-lg-5">
          <img class="img-thumbnail mt-5" src="/NemoSingleClass.png" alt="">

          <div v-if="this.singleToggle">
            <button class="SelectedText" @click="SingleClassToggleOff">Single Class Detection</button>
          </div>

          <div v-else>
            <button class="UnselectedText" @click="SingleClassToggleOn" @mouseenter="SingleClassHoverOn"
                    @mouseleave="SingleClassHoverOff">Single Class Detection
            </button>
          </div>

          <div v-if="this.singleToggle || this.singleHover" class="LeftSideText">
            <p style="font-size: 1.2vw; color: gray;">
              NEEDS READOVER Single Class detection will only deliver results of either ture or false.
              This being yes or no to whether or not wildfire smoke was detected.</p>
          </div>
        </div>



        <div class="col-12 col-lg-5">
          <img alt="" class="img-thumbnail mt-5" src="/NemoDensity.png">
          <div v-if="this.densityToggle" class="RightSideButton">
            <button class="SelectedText" @click="DensityToggleOff">Density Detection</button>
          </div>
          <div v-else class="RightSideButton">
            <button class="UnselectedText" @click="DensityToggleOn" @mouseenter="DensityHoverOn"
                    @mouseleave="DensityHoverOff">Density Detection
            </button>
          </div>
          <div v-if="this.densityToggle || this.densityHover" class="RightSideText">
            <p style="font-size: 1.2vw; color: gray;">NEEDS READOVER Density Detection will detect wildfire smoke, and
              provide an estimate to
              how dense the smoke is. This can be helpful for studyin wildfire smoke.</p>
          </div>
        </div>


        <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between min-column-width">
          <div v-if="this.moreOptions" class="MoreOptionsButton">
            <button class="SelectedText" @click="MoreOptionsToggleOff">More Options</button>
          </div>
          <div v-else class="MoreOptionsButton">
            <button class="UnselectedText" @click="MoreOptionsToggleOn">More Options</button>
          </div>
        </div>

        <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between min-column-width">
          <div v-if="moreOptions">

            <div class="col-12 col-lg-5">
              <div v-if="this.extraOption1" class="LeftSideButton">
                <button class="SelectedText" @click="ExtraOption1ToggleOff">ExtraOption1</button>
              </div>
              <div v-else class="LeftSideButton">
                <button class="UnselectedText" @click="ExtraOption1ToggleOn" @mouseenter="ExtraOption1HoverOn"
                        @mouseleave="ExtraOption1HoverOff">ExtraOption1
                </button>
              </div>
              <div v-if="this.extraOption1 || this.extraOption1Hover" class="LeftSideText">
                <p style="font-size: 1.2vw; color: gray;">Extra Option 1</p>
              </div>
            </div>

            <div class="col-12 col-lg-5">
              <div v-if="this.extraOption2" class="RightSideButton">
                <button class="SelectedText" @click="ExtraOption2ToggleOff">ExtraOption2</button>
              </div>
              <div v-else class="RightSideButton">
                <button class="UnselectedText" @click="ExtraOption2ToggleOn" @mouseenter="ExtraOption2HoverOn"
                        @mouseleave="ExtraOption2HoverOff">ExtraOption2
                </button>
              </div>
              <div v-if="this.extraOption2 || this.extraOption2Hover" class="RightSideText">
                <p style="font-size: 1.2vw; color: gray;">Extra Option 2</p>
              </div>
            </div>
          </div>


        </div>


      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "ConfigureNemo",
  data() {
    return {
      singleToggle: true,
      densityToggle: false,
      singleHover: false,
      densityHover: false,
      moreOptions: false,
      extraOption1: false,
      extraOption2: false,
      extraOption1Hover: false,
      extraOption2Hover: false
    }
  },
  methods: {
    SingleClassToggleOn() {
      this.singleToggle = true
      this.densityToggle = false
      this.densityHover = false
    },
    SingleClassToggleOff() {
      this.singleToggle = false
      this.densityToggle = true
    },
    DensityToggleOn() {
      this.densityToggle = true
      this.singleToggle = false
      this.singleHover = false
    },
    DensityToggleOff() {
      this.densityToggle = false
      this.singleToggle = true
    },
    SingleClassHoverOn() {
      this.singleHover = true
    },
    SingleClassHoverOff() {
      this.singleHover = false
    },
    DensityHoverOn() {
      this.densityHover = true
    },
    DensityHoverOff() {
      this.densityHover = false
    },
    MoreOptionsToggleOn() {
      this.moreOptions = true
    },
    MoreOptionsToggleOff() {
      this.moreOptions = false
    },
    ExtraOption1ToggleOn() {
      this.extraOption1 = true
      this.extraOption2Hover = false
    },
    ExtraOption1ToggleOff() {
      this.extraOption1 = false
    },
    ExtraOption2ToggleOn() {
      this.extraOption2 = true
      this.extraOption1Hover = false
    },
    ExtraOption2ToggleOff() {
      this.extraOption2 = false
    },
    ExtraOption1HoverOn() {
      this.extraOption1Hover = true
    },
    ExtraOption1HoverOff() {
      this.extraOption1Hover = false
    },
    ExtraOption2HoverOn() {
      this.extraOption2Hover = true
    },
    ExtraOption2HoverOff() {
      this.extraOption2Hover = false
    }
  }
}
</script>

<!-- This is all of our styling using bootstrap/css -->
<style scoped>
/* Initial padding of Top Menu bar */
.InitialPadding {
  padding-top: 100px;
}

.SelectedText {
  background-color: gray;
  color: white;
  border-style: solid;
  border-color: black;
  font-size: 2vw;
  width: 25vw;
}

.UnselectedText {
  background-color: white;
  color: black;
  border-style: solid;
  border-color: black;
  font-size: 2vw;
  width: 25vw;
}

.LeftSideButton {
  padding-left: 10vw;
  padding-top: 3vw;
  float: left;
}

.MoreOptionsButton {
  text-align: center;
  padding-top: 6vw;
  padding-bottom: 6vw;
}

.RightSideButton {
  padding-right: 10vw;
  padding-top: 3vw;
  float: right;
}

.LeftSideText {
  font-size: 1vw;
  text-align: justify;
  float: left;
  padding-left: 10vw;
  width: 35vw;
}

.RightSideText {
  font-size: 1vw;
  text-align: justify;
  float: right;
  padding-right: 10vw;
  width: 35vw;
}

.Images {
  width: 40vw;
  height: auto;
}


.mt-custom {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.min-column-width {
  min-width: 500px;
}


</style>