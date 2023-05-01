<template>
  <div class="ConfigureNemo">
        <section class="bg-light custom-title">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-9">
              <h2 class="display-6 text-center">Settings</h2>
            </div>
        </div>
      </div>
    </section>
    <section class="bg-white mt-custom">
<!--      <div class="InitialPadding">-->
<!--        <h2 class="display-6 lh-1 mb-5" style="margin-left: 5vw; font-size: 2.5vw;">Configure Nemo</h2>-->
<!--      </div>-->
      <div style="padding-bottom: 15vw;">
        <div style="float: left; padding-left: 2vw;">
          <img class="Images" src="/NemoSingleClass.png"
               alt="Image with bounding boxes detecting smoke in two locations.">
        </div>
        <div style="float: right; padding-right: 2vw;">
          <img class="Images" src="/NemoDensity.png"
               alt="Image with bounding boxes detecting smoke density in three different locations.">
        </div>
      </div>
      <div style="padding-bottom: 12vw;">
        <div v-if="this.typeToggle" class="LeftSideButton">
          <button class="SelectedText" @click="TypeToggleOff()">Single Class Detection</button>
        </div>
        <div v-else class="LeftSideButton">
          <button class="UnselectedText" @click="TypeToggleOn()">Single Class Detection</button>
        </div>
        <div v-if="!this.typeToggle" class="RightSideButton">
          <button class="SelectedText" @click="TypeToggleOn()">Density Detection</button>
        </div>
        <div v-else class="RightSideButton">
          <button class="UnselectedText" @click="TypeToggleOff()">Density Detection</button>
        </div>
      </div>
      <div style="padding-bottom: 10vw; padding-top: 2vw;">
        <div class="LeftSideText">
          <p style="font-size: 1.2vw; color: gray;">Single Class detection will only deliver results of either true or
            false. This being yes or no to whether or not wildfire smoke was detected.</p>
        </div>
        <div class="RightSideText">
          <p style="font-size: 1.2vw; color: gray;">Density Detection will detect wildfire smoke, and provide an estimate to
            how dense the smoke is. This can be helpful for studying wildfire smoke.</p>
        </div>
      </div>
      <div v-if="this.moreOptions" class="MoreOptionsButton">
        <button class="SelectedText" @click="MoreOptionsToggleOff">More Options</button>
      </div>
      <div v-else class="MoreOptionsButton">
        <button class="UnselectedText" @click="MoreOptionsToggleOn">More Options</button>
      </div>
      <div v-if="moreOptions">
        <div style="padding-bottom: 12vw;">
          <div v-if="this.extraOption1" class="LeftSideButton">
            <button class="SelectedText" @click="ExtraOption1ToggleOff">Attention Weights</button>
          </div>
          <div v-else class="LeftSideButton">
            <button class="UnselectedText" @click="ExtraOption1ToggleOn">Attention Weights</button>
          </div>
          <div v-if="this.extraOption2" class="RightSideButton">
            <button class="SelectedText" @click="ExtraOption2ToggleOff">ExtraOption2</button>
          </div>
          <div v-else class="RightSideButton">
            <button class="UnselectedText" @click="ExtraOption2ToggleOn">ExtraOption2</button>
          </div>
        </div>
        <div style="padding-bottom: 10vw; padding-top: 2vw;">
          <div class="LeftSideText">
            <p style="font-size: 1.2vw; color: gray;">Encoder-Decoder Attention Weights</p>
          </div>
          <div class="RightSideText">
            <p style="font-size: 1.2vw; color: gray;">Extra Option 2</p>
          </div>
        </div>
        <!-- <div id="cacheTest">
          <h2>Options</h2>
          <div v-for="(option,n) in options">
            <p>
              <span class="cat">{{ option }}</span>
              <button @click="removeOption(n)">Remove</button>
            </p>
          </div>
          <p>
            <input v-model="newOption">
            <button @click="addOption">Add Option</button>
          </p>
          <div>Selected Options: {{ selectedOptions }}</div>
          <input id="opt1" v-model="selectedOptions" type="checkbox" value="Option 1">
          <label for="opt1">Option 1</label>
          <input id="opt2" v-model="selectedOptions" type="checkbox" value="Option 2">
          <label for="opt2">Option 2</label>
          <input id="opt3" v-model="selectedOptions" type="checkbox" value="Option 3">
          <label for="opt3">Option 3</label>
          <input id="optx" v-model="optionDict" type="checkbox" @click="addDictopt('option1', true)">
          <label for="optx">Option Test</label>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import UploadFiles from "../components/UploadFiles.vue";
import {store} from "../store"
export default {
  name: "ConfigureNemo",
  components: {UploadFiles},
  data() {
    return {
      typeToggle: store.state.single_class_option, //True for single class, false for density
      moreOptions: store.state.more_options_toggle,
      extraOption1: store.state.attention_weights_option,
      extraOption2: false
    }
  },
  // mounted() {
  //   if (localStorage.getItem('options')) {
  //     try {
  //       this.options = JSON.parse(localStorage.getItem('options'));
  //     } catch (e) {
  //       localStorage.removeItem('options');
  //     }
  //   }
  // },
  // dictMount() {
  //   if (localStorage.getItem('optionDict')) {
  //     try {
  //       this.optionDict = JSON.parse(localStorage.getItem('optionDict'));
  //     } catch (e) {
  //       localStorage.removeItem('optionDict')
  //     }
  //   }
  // },

  methods: {
    TypeToggleOn() {
      this.typeToggle = true
      store.state.single_class_option = this.typeToggle
      //console.log(store.state.single_class_option)
    },
    TypeToggleOff() {
      this.typeToggle = false
      store.state.single_class_option = this.typeToggle
      //console.log(store.state.single_class_option)
    },
    MoreOptionsToggleOn() {
      this.moreOptions = true
      store.state.more_options_toggle = this.moreOptions
    },
    MoreOptionsToggleOff() {
      this.moreOptions = false
      store.state.more_options_toggle = this.moreOptions
    },
    ExtraOption1ToggleOn() {
      this.extraOption1 = true
      store.state.attention_weights_option = this.extraOption1
    },
    ExtraOption1ToggleOff() {
      this.extraOption1 = false
      store.state.attention_weights_option = this.extraOption1
    },
    ExtraOption2ToggleOn() {
      this.extraOption2 = true
    },
    ExtraOption2ToggleOff() {
      this.extraOption2 = false
    }
  }
}
</script>

<!-- This is all of our styling using bootstrap/css -->
<style scoped>
/* Initial padding of Top Menu bar */
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

</style>