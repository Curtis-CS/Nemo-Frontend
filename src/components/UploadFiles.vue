<template>
  <div class="card mt-5" style="width: auto">
    <div class="card-body">
      <h5 class="card-title">Upload Files</h5>
      <div class="dropzone-container" @dragleave="dragleave" @dragover="dragover" @drop="drop">
        <input
            id="fileInput"
            ref="file"
            accept=".gif, .jpeg, .jpg, .mkv, .mov, .mp4, .mpeg, .png"
            class="hidden-input"
            multiple
            name="file"
            type="file"
            @change="handleFileUpload"
        >
        <div><img alt="" class=upload-icon src="/upload-icon.png"/></div>
        <label class="" for="fileInput">
          <span>Drag and Drop or <u class="choose-file-button">choose files</u></span>
        </label>
      </div>
      <div v-if="files.length">
        <div v-for="file in files" :key="file.name">
          <div class="container border-1 shadow-sm mt-3">
            <table width="100%">
              <tr>
                <td rowspan="2">
                  <img alt="" class="custom_thumbnail" v-bind:src="icons[file.name.split('.').pop()]"/>&nbsp;
                </td>
                <td>{{ file.name }}&nbsp;</td>
                <td>{{ Math.round(file.size / 1000) + "Kb" }}&nbsp;</td>
                <td rowspan="2" align="right">
                  <button class="remove-file-button" type="button" @click="removeFile(files.indexOf(file))">
                    <img alt="" class="custom_thumbnail" src="/red_x.png"/>&nbsp;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  Success!!!!
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="container bg-light">
          <button class="run-button" type="button" @click="submitFiles">
            Run
          </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isDragging: false,
      files: [],
      icons: {
        gif: '/gif-icon.png',
        jpg: '/jpeg-icon.png',
        jpeg: '/jpeg-icon.png',
        mkv: '/mkv-icon.png',
        mov: '/mov-icon.png',
        mp4: '/mp4-icon.png',
        mpeg: '/mpeg-icon.png',
        png: '/png-icon.png'
      }
    }
  },
  methods: {
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.handleFileUpload();
      this.isDragging = false;
    },
    handleFileUpload() {
      this.files = [...this.$refs.file.files];
    },
    removeFile(i) {
      this.files.splice(i, 1);
    },
    submitFiles() {
      console.log("The Run Button Was pressed.")
      // Prepare Form Data Containing Files
      // var formData = new FormData();
      // for (let i = 0; i < this.files.length; i++) {
      //   formData.append(this.files[i].name, this.files[i]);
      //   console.log('>> formData >>', formData)
      // }
      let formData = new FormData()
      let selectedFile = this.files[0]
      formData.append("fileNameCorrect", selectedFile)

      axios.post('https://nemo-backend.herokuapp.com/', formData, {
      // axios.post('http://127.0.0.1:5000', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
      // axios
      //     //.post('http://127.0.0.1:5000', {
      //     .post('https://nemo-backend.herokuapp.com/', {
      //       firstName: 'Ben',
      //       lastName: 'Kenobi'
      //     })
      //     .then(response => console.log(response))
      //     .catch(error => console.log(error))
      // Axios Request to Back-End Server

      // axios({
      //   method: "POST",
      //   url: 'https://nemo-backend.herokuapp.com/',
      //   //url: 'https://nemo-backend.herokuapp.com/',
      //   data: formData,
      //   headers: {"Content-Type": "multipart/form-data"}
      // })
      //     .then(function () {
      //       console.log(this.FormData)
      //     })
      //     .catch(function () {
      //       console.log("failure");
      //     });
    }
  }
}
</script>

<style scoped>

.upload-icon {
  opacity: 0.5;
  width: 40px;
  height: 40px;
  margin-bottom: 0.5em;
}

.choose-file-button {
  cursor: pointer;
  font-style: italic;
  color: #adcdec;
}

.remove-file-button {
  border: none;
  background-color: white;
  justify-content: center;
}

.run-button {
  border: dashed;
  border-radius: 25px;
  margin-top: 2rem;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #f7fafc;
  float: right;
}

.custom_thumbnail {
  width: 40px;
  height: 40px;

}

.dropzone-container {
    padding: 1rem;
    background: #f7fafc;
    border: 2px dashed #e2e8f0;
    margin-top: 1rem;
    text-align: center;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

</style>

