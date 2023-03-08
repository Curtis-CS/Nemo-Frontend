<template>
	<div class="InitialPadding">
		<h2 class="display-6 lh-1 mb-5" style="margin-left: 5vw; font-size: 2.5vw;">Configure Nemo</h2>
	</div>
	<div style="padding-bottom: 15vw;">
		<div style="float: left; padding-left: 2vw;">
			<img src="/NemoSingleClass.png" class="Images">
		</div>
		<div style="float: right; padding-right: 2vw;">
			<img src="/NemoDensity.png" class="Images">
		</div>
	</div>
	<div style="padding-bottom: 12vw;">
		<div class="LeftSideButton" v-if="this.singleToggle">
			<button class="SelectedText" @click="SingleClassToggleOff">Single Class Detection</button>
		</div>
		<div class="LeftSideButton" v-else>
			<button class="UnselectedText" @mouseenter="SingleClassHoverOn" @mouseleave="SingleClassHoverOff" 
					@click="SingleClassToggleOn">Single Class Detection</button>
		</div>
		<div class="RightSideButton" v-if="this.densityToggle">
			<button class="SelectedText" @click="DensityToggleOff">Density Detection</button>
		</div>
		<div class="RightSideButton" v-else>
			<button class="UnselectedText" @mouseenter="DensityHoverOn" @mouseleave="DensityHoverOff" 
					@click="DensityToggleOn">Density Detection</button>
		</div>
	</div>
	<div style="padding-bottom: 10vw; padding-top: 2vw;">
		<div class="LeftSideText" v-if="this.singleToggle || this.singleHover">
			<p style="font-size: 1.2vw; color: gray;">NEEDS READOVER Single Class detection will only deliver results of either true or false. This being yes or no to whether or not wildfire smoke was detected.</p>
		</div>
		<div class="RightSideText" v-if="this.densityToggle || this.densityHover">
			<p style="font-size: 1.2vw; color: gray;">NEEDS READOVER Density Detection will detect wildfire smoke, and provide an estimate to how dense the smoke is. This can be helpful for studying wildfire smoke.</p>
		</div>
	</div>
	<div class="MoreOptionsButton" v-if="this.moreOptions">
			<button class="SelectedText" @click="MoreOptionsToggleOff">More Options</button>
	</div>
		<div class="MoreOptionsButton" v-else>
			<button class="UnselectedText" @click="MoreOptionsToggleOn">More Options</button>
		</div>
	<div v-if="moreOptions">
		<div style="padding-bottom: 12vw;">
			<div class="LeftSideButton" v-if="this.extraOption1">
				<button class="SelectedText" @click="ExtraOption1ToggleOff">ExtraOption1</button>
			</div>
			<div class="LeftSideButton" v-else>
				<button class="UnselectedText" @mouseenter="ExtraOption1HoverOn" @mouseleave="ExtraOption1HoverOff" 
						@click="ExtraOption1ToggleOn">ExtraOption1</button>
			</div>
			<div class="RightSideButton" v-if="this.extraOption2">
				<button class="SelectedText" @click="ExtraOption2ToggleOff">ExtraOption2</button>
			</div>
			<div class="RightSideButton" v-else>
				<button class="UnselectedText" @mouseenter="ExtraOption2HoverOn" @mouseleave="ExtraOption2HoverOff" 
						@click="ExtraOption2ToggleOn">ExtraOption2</button>
			</div>
		</div>
		<div style="padding-bottom: 10vw; padding-top: 2vw;">
		<div class="LeftSideText" v-if="this.extraOption1 || this.extraOption1Hover">
			<p style="font-size: 1.2vw; color: gray;">Extra Option 1</p>
		</div>
		<div class="RightSideText" v-if="this.extraOption2 || this.extraOption2Hover">
			<p style="font-size: 1.2vw; color: gray;">Extra Option 2</p>
		</div>
	</div>
  <div id="cacheTest">
    <h2>Options</h2>
    <div v-for="(option,n) in options">
      <p>
      <span class="cat">{{option}}</span> <button @click="removeOption(n)">Remove</button>
      </p>
    </div>
    <p>
      <input v-model="newOption">
      <button @click="addOption">Add Option</button>
    </p>
    <div>Selected Options: {{ selectedOptions }}</div>

    <input type="checkbox" id="opt1" value="Option 1" v-model="selectedOptions">
    <label for="opt1">Option 1</label>

    <input type="checkbox" id="opt2" value="Option 2" v-model="selectedOptions">
    <label for="opt2">Option 2</label>

    <input type="checkbox" id="opt3" value="Option 3" v-model="selectedOptions">
    <label for="opt3">Option 3</label>

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
      options:[],
      newOption:null,
      optionDict: {
        option1: false,
        option2: false,
        option3: true,
        option4: false
      },
      selectedOptions:[]
    }
  },
  mounted() {
    if(localStorage.getItem('options')) {
      try {
        this.options = JSON.parse(localStorage.getItem('options'));
      } catch(e) {
        localStorage.removeItem('options');
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
      if(!this.newOption) return;
      this.options.push(this.newOption);
      this.newOption = '';
      this.saveOptions();
    },
    removeOption(x) {
      this.options.splice(x,1);
      this.saveOptions();
    },
    saveOptions() {
      let parsed = JSON.stringify(this.options);
      localStorage.setItem('options', parsed);
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