<template>
	<section class="bg-white">
		<div v-if="resultsRecieved">
					<!--Initial formatting for Results title-->
			<div class="InitialPadding">
				<h2 class="display-6 lh-1 mb-5" style="margin-left: 5vw;">Results</h2>
			</div>
			<!-- The padding and background behind the thumbnails -->
			<div class="thumbnailPadding" v-if="visibleThumbnails">
				<!-- This is the box that the thumbnail is in, that when clicked sends the index of the thumbnail, also generates thumbnails using v-for -->
				<a href="#" class="thumbnailFormatting" @click.prevent="showLightbox(index)" v-for="(image, index) in images" :key="index">
					<!-- These are the thumbnails -->
					<img class="thumbnailFormattingMore" :src="image" :key="index">
				</a>
			</div>
			<!--This is the lightbox (pop up image) that is set to invisible by default-->
			<div class="grayBackground" style="padding-bottom: 1vw;" v-if="visibleLightbox" @click="hideLightbox">
				<!--The X button to close-->
				<div class="XButton" @click.stop="hideLightbox">&times;
				</div>

				<!--The image that is displayed in the lightbox (pop up)-->
				<div class="Center"> 
					<div class="lightboxImage" @click.stop="">
						<img :src="images[index]">
					</div>
				</div>
					<!--These are the two arrows to click to go to next or prev file-->
					<div class="Center">
						<div class="grayBackground" @click.stop="goToPrevFile" style="width: 52vw; float:left">
							<svg class="pointer-events-none ArrowLeft" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
								<path d="M0-.5h24v24H0z" fill="none"/>
							</svg>
						</div>
						<div class="grayBackground" @click.stop="goToNextFile" style="width: 48vw; float:right">
							<svg class="pointer-events-none ArrowRight" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
								<path d="M0-.25h24v24H0z" fill="none"/>
							</svg>
						</div>
					</div>
			</div>
		</div>
		<div v-if="!resultsRecieved">
			<div class="InitialPadding">
				<h2 class="display-6 lh-1 mb-5" style="margin-left: 5vw;">No Results Recieved Yet</h2>
			</div>
			<div class="InitialPadding">
				<h2 class="display-6 lh-1 mb-5" style="margin-left: 5vw;">
					<button @click="testResults">Test Results</button>
				</h2>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true
		},
	},
	data() {
		return {
			visibleLightbox: false,
			visibleThumbnails: true,
			resultsRecieved: false,
			index: 0
		}
	},
	created() {
		window.addEventListener('keypress', this.RunUnitTests);
	},
	destroyed() {
		window.removeEventListener('keypress', this.RunUnitTests);
	},
	methods: {
		showLightbox(passedIndex) {
			this.visibleLightbox = true
			this.visibleThumbnails = false
			this.index = passedIndex
		},
		hideLightbox() {
			this.visibleLightbox = false
			this.index = 0
			this.visibleThumbnails = true
		},
		goToNextFile() {
			if (this.index < this.images.length - 1)
			{
				this.index += 1
			}
			else 
			{
				this.index = 0
			}

		},
		goToPrevFile() {
			if (this.index > 0)
			{
				this.index -= 1
			}
			else
			{
				this.index = this.images.length -1
			}
		},
		testResults() {
			this.resultsRecieved = true
		}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//----------------------Unit Testing Functions---------------------------
		// UnitTestIndexOutOfRangeTestIncrement() {
		// 	console.log("------------------------------------------------------")
		// 	console.log("Initiating Index Out Of Bounds Unit Test")
		// 	let TestIndex1 = this.imagesLength - 1
		// 	this.index = TestIndex1
		// 	console.log("Test Index 1: ", this.index)
		// 	this.goToNextFile()
		// 	console.log("Index after Increment: Expected: 0---Recieved: ", this.index)
		// 	if (this.index == 0)
		// 	{
		// 		console.log("SUCCESS!")
		// 		return true

		// 	}
		// 	else 
		// 	{
		// 		console.log("FAIL!")
		// 		return false
		// 	}

		// },
		// UnitTestIndexOutOfRangeTestDecrement() {
		// 	console.log("------------------------------------------------------")
		// 	let TestIndex2 = 0
		// 	this.index = TestIndex2
		// 	console.log("Test Index 2: ", this.index)
		// 	this.goToPrevFile()
		// 	console.log("Index after Decrement: Expected: ", this.imagesLength - 1, "---Recieved: ", this.index)
		// 	if (this.imagesLength - 1 == this.index)
		// 	{
		// 		console.log("SUCCESS!")
		// 		return true
		// 	}
		// 	else 
		// 	{
		// 		console.log("FAIL!")
		// 		return false
		// 	}
		// }

//----------------------Unit Testing Functions---------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
	}
}
</script>
<style>
.InitialPadding {
	padding-top: 100px;
}
.grayBackground {
	background-color: whitesmoke;
}

.lightboxImage img {
	width: 80rem;
	height: 50rem;
	margin-right: 1vw;
	max-width: 95%;
	max-height: calc(100vw - 100px);
}

.thumbnailPadding {
	margin-left: 1vw;
	margin-right: 1vw;
	background-color: whitesmoke;
	text-align: center;
}

.XButton {
	width: 3vw;
	height: 3vw;
	float: left;
	color: white;
	cursor: pointer;
	font-size: 2vw;
	background-color: gray;
	text-align: center;
}
.ArrowLeft {
	background-color: gray;
	text-align: left;
	cursor: pointer;
}
.ArrowRight {
	background-color: gray;
	text-align: right;
	cursor: pointer;
}
.Center {
	text-align: center;
}
.thumbnailFormatting {
	padding-left: 1vw;
	padding-top: 1vw;
}
.thumbnailFormattingMore {
	padding-top: 1vw;
	width: 20vw;
	height: 15vw;
}

</style>