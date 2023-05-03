<template>
  <!-- <section class="bg-white"> -->
    <!--Initial formatting for Results title-->
    <section class="bg-light custom-title">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <h2 class="display-6 text-center">Results</h2>
        </div>
      </div>
    </div>
  </section>
    <!-- The padding and background behind the thumbnails -->
    <div class="Center">
    <div v-if="visibleThumbnails" style="background-color:lightgray; display: flex; justify-content: center; max-width: 98%; margin-left: 1vw; margin-right: 1vw; flex-wrap: wrap;">
      <!-- This is the box that the thumbnail is in, that when clicked sends the index of the thumbnail, also generates thumbnails using v-for -->
      <a v-for="(image, index) in images" :key="index" href="#"
          @click.prevent="showLightbox(index)">
        <div style="text-align: center;width: 50rem; height: 35rem; float:inline-end;">
        <!-- These are the thumbnails -->
        <img :key="index" :src="image" style="padding-top: 1vw; padding-left: .5vw; padding-right: .5vw; width: 50rem; height: 35rem;" alt="Displaying smoke detection images.">
        <p style="width: 50rem; text-align: center; position: relative; background-color: lightgray;">{{ imagesNames[index] }}</p>
      </div>
      </a>
      </div>
    </div>
    <!--This is the lightbox (pop up image) that is set to invisible by default-->
    <div v-if="visibleLightbox" class="grayBackground" style="padding-bottom: 1vw;" @click="hideLightbox">
      <!--The X button to close-->
      <div class="XButton" @click.stop="hideLightbox">&times;
      </div>
      <!--The image that is displayed in the lightbox (pop up)-->
      <div class="Center">
        <div class="lightboxImage" @click.stop="">
          <img :src="images[index]" alt="Displaying smoke detection images.">
        </div>
      </div>
      <!--These are the two arrows to click to go to next or prev file-->
      <div class="Center">
        <div class="grayBackground" style="margin-left: 20.98vw; float:left" @click.stop="goToPrevFile">
          <svg class="pointer-events-none ArrowLeft" fill="#fff" height="48" viewBox="0 0 24 24" width="48"
                xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            <path d="M0-.5h24v24H0z" fill="none"/>
          </svg>
        </div>
        <div style="text-align: center; width: 30vw; display: inline-block;" @click.stop="DownloadFile">
        <p style="text-align: center; font-size: 1vw; color: blue; cursor: pointer; padding-top: 1px; margin-left: 1vw; margin-right: 1vw;">{{ imagesNames[index] }}</p>
      </div>
        <div class="grayBackground" style="margin-right: 18vw; float:right" @click.stop="goToNextFile">
          <svg class="pointer-events-none ArrowRight" fill="#fff" height="48" viewBox="0 0 24 24" width="48"
                xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            <path d="M0-.25h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
    <div style="padding-top: 3vw; text-align: center;" class="display-6 lh-1 mb-5" v-if="CheckStats()">
        <p>Total Time Taken: {{  nemoDuration }} seconds</p>
        <p>Average Time Taken Per an Image: {{  nemoAvg }} seconds</p>
        <p>Smoke Detected in {{  nemoDetected }} / {{ nemoTotal }} images</p>
    </div>
    <section class="bg-light custom-title">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <h2 class="display-6 text-center" style="cursor: pointer; padding-bottom: 1vw;" @click="DownloadAll()">Download All</h2>
        </div>
      </div>
    </div>
  </section>
  <!-- </section> -->
</template>

<script>
import JSZip from 'jszip'
import { store } from "@/store"
export default {
  data() {
    return {
      visibleLightbox: false,
      visibleThumbnails: true,
      resultsRecieved: false,
      index: 0,
      images: store.state.result_images,
      imagesNames: store.state.result_images_names,
      fileObjects: store.state.result_file_objects,
      nemoDuration: 0,
      nemoAvg: 0,
      nemoDetected: 0,
      nemoTotal: 0
    }
  },
  methods: {
    CheckStats() {
      this.nemoDuration = store.state.nemoDuration
      this.nemoAvg = store.state.nemoAvg
      this.nemoDetected = store.state.nemoDetected
      this.nemoTotal = store.state.nemoTotal
      return this.nemoDuration > 0;
    },
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
      if (this.index < this.images.length - 1) {
        this.index += 1
      } else {
        this.index = 0
      }
    },
    goToPrevFile() {
      if (this.index > 0) {
        this.index -= 1
      } else {
        this.index = this.images.length - 1
      }
    },
    DownloadFile() {
      const link = document.createElement('a')
      link.href = this.images[this.index]
      link.setAttribute('download', this.imagesNames[this.index])

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    async DownloadAll() {
      let x = 0;
      const zip = new JSZip()
      while (x < this.fileObjects.length)
      {
        zip.folder('results').file(this.imagesNames[x], this.fileObjects[x])
        x++
      }
      zip.generateAsync({type: "blob"}).then(function(content) {
        let blob = new Blob([content], {type: "application/zip"})
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', 'results.zip')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
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
.grayBackground {
	background-color: whitesmoke;
}
.lightboxImage img {
	width: 60vw;
	height: 39vw;
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
</style>