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
			<button class="SelectedSingleClass" @click="SingleClassToggleOff">Single Class Detection</button>
		</div>
		<div class="LeftSideButton" v-else>
			<button class="UnselectedSingleClass" @click="SingleClassToggleOn">Single Class Detection</button>
		</div>
		<div class="RightSideButton" v-if="this.densityToggle">
			<button class="SelectedDensity" @click="DensityToggleOff">Density Detection</button>
		</div>
		<div class="RightSideButton" v-else>
			<button class="UnselectedDensity" @click="DensityToggleOn">Density Detection</button>
		</div>
	</div>
	<div style="padding-bottom: 10vw; padding-top: 3vw;">
		<div class="LeftSideText" v-if="this.singleToggle">
			<p style="font-size: 1.2vw; color: gray;">NEEDS READOVER Single Class detection will only deliver results of either ture or false. This being yes or no to whether or not wildfire smoke was detected.</p>
		</div>
		<div class="RightSideText" v-if="this.densityToggle">
			<p style="font-size: 1.2vw; color: gray;">NEEDS READOVER Density Detection will detect wildfire smoke, and provide an estimate to how dense the smoke is. This can be helpful for studyin wildfire smoke.</p>
		</div>
	</div>
</template>

<script>
export default {
  name: "ConfigureNemo",
  data() {
	return {
	singleToggle: true,
	densityToggle: false
	}
  },
  methods: {
	SingleClassToggleOn() {
		this.singleToggle = true
		this.densityToggle = false
	},
	SingleClassToggleOff() {
		this.singleToggle = false
	},
	DensityToggleOn() {
		this.densityToggle = true
		this.singleToggle = false
	},
	DensityToggleOff() {
		this.densityToggle = false
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
.UnselectedSingleClass {
	background-color: white;
	color: black;
	border-style: solid;
	border-color: black;
	font-size: 2vw;
	width: 25vw;
}
.SelectedSingleClass {
	background-color: gray;
	color: white;
	border-style: solid;
	border-color: black;
	font-size: 2vw;
	width: 25vw;
}
.UnselectedDensity {
	background-color: white;
	color: black;
	border-style: solid;
	border-color: black;
	font-size: 2vw;
	width: 25vw;
}
.SelectedDensity {
	background-color: gray;
	color: white;
	border-style: solid;
	border-color: black;
	font-size: 2vw;
	width: 25vw;
}
.LeftSideButton {
	padding-left: 10vw;
	padding-top: 5vw;
	float: left;
}
.RightSideButton {
	padding-right: 10vw;
	padding-top: 5vw;
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
	width: 45vw;
	height: auto;
}

</style>