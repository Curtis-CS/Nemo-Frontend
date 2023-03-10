<template>
  <div class="InitialPadding">
    <h2 class="display-6 lh-1 mb-5" style="margin-left: 5vw; font-size: 2.5vw;">Configure Nemo</h2>
  </div>
  <div style="padding-bottom: 15vw;">
    <div style="float: left; padding-left: 2vw;">
      <img class="Images" src="/NemoSingleClass.png">
    </div>
    <div style="float: right; padding-right: 2vw;">
      <img class="Images" src="/NemoDensity.png">
    </div>
  </div>
  <div style="padding-bottom: 12vw;">
    <div v-if="this.singleToggle" class="LeftSideButton">
      <button class="SelectedText" @click="SingleClassToggleOff">Single Class Detection</button>
    </div>
    <div v-else class="LeftSideButton">
      <button class="UnselectedText" @click="SingleClassToggleOn" @mouseenter="SingleClassHoverOn"
              @mouseleave="SingleClassHoverOff">Single Class Detection
      </button>
    </div>
    <div v-if="this.densityToggle" class="RightSideButton">
      <button class="SelectedText" @click="DensityToggleOff">Density Detection</button>
    </div>
    <div v-else class="RightSideButton">
      <button class="UnselectedText" @click="DensityToggleOn" @mouseenter="DensityHoverOn"
              @mouseleave="DensityHoverOff">Density Detection
      </button>
    </div>
  </div>
  <div style="padding-bottom: 10vw; padding-top: 2vw;">
    <div v-if="this.singleToggle || this.singleHover" class="LeftSideText">
      <p style="font-size: 1.2vw; color: gray;">Single Class detection will only deliver results of either true or
        false. This being yes or no to whether or not wildfire smoke was detected.</p>
    </div>
    <div v-if="this.densityToggle || this.densityHover" class="RightSideText">
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
        <button class="SelectedText" @click="ExtraOption1ToggleOff">ExtraOption1</button>
      </div>
      <div v-else class="LeftSideButton">
        <button class="UnselectedText" @click="ExtraOption1ToggleOn" @mouseenter="ExtraOption1HoverOn"
                @mouseleave="ExtraOption1HoverOff">ExtraOption1
        </button>
      </div>
      <div v-if="this.extraOption2" class="RightSideButton">
        <button class="SelectedText" @click="ExtraOption2ToggleOff">ExtraOption2</button>
      </div>
      <div v-else class="RightSideButton">
        <button class="UnselectedText" @click="ExtraOption2ToggleOn" @mouseenter="ExtraOption2HoverOn"
                @mouseleave="ExtraOption2HoverOff">ExtraOption2
        </button>
      </div>
    </div>
    <div style="padding-bottom: 10vw; padding-top: 2vw;">
      <div v-if="this.extraOption1 || this.extraOption1Hover" class="LeftSideText">
        <p style="font-size: 1.2vw; color: gray;">Extra Option 1</p>
      </div>
      <div v-if="this.extraOption2 || this.extraOption2Hover" class="RightSideText">
        <p style="font-size: 1.2vw; color: gray;">Extra Option 2</p>
      </div>
    </div>
    <div id="cacheTest">
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
    </div>
  </div>
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
      extraOption2Hover: false,
      options: [],
      newOption: null,
      optionDict: {
        option1: false,
        option2: false,
        option3: true
      },
      selectedOptions: []
    }
  },
  mounted() {
    if (localStorage.getItem('options')) {
      try {
        this.options = JSON.parse(localStorage.getItem('options'));
      } catch (e) {
        localStorage.removeItem('options');
      }
    }
  },
  dictMount() {
    if (localStorage.getItem('optionDict')) {
      try {
        this.optionDict = JSON.parse(localStorage.getItem('optionDict'));
      } catch (e) {
        localStorage.removeItem('optionDict')
      }
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
    },
    addOption() {
      if (!this.newOption) return;
      this.options.push(this.newOption);
      this.newOption = '';
      this.saveOptions();
    },
    addDictopt(key, val) {
      this.optionDict.update({key: val});
      this.saveDictopt();
    },
    removeOption(x) {
      this.options.splice(x, 1);
      this.saveOptions();
    },
    rmvDictopt(key) {
      this.optionDict.delete(key);
      this.saveDictopt();

    },
    saveOptions() {
      let parsed = JSON.stringify(this.options);
      localStorage.setItem('options', parsed);
    },
    saveDictopt() {
      let parsed = JSON.stringify(this.optionDict);
      localStorage.setItem('optionDict', parsed);
      console.log(this.optionDict);
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

</style>