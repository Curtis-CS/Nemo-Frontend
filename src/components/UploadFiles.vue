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
          <span>Drag and Drop or <u class="choose-file-button">choose files</u>.</span>
        </label>
      </div>
      <div v-if="files.length">
        <div v-for="file in files" :key="file.name">
          <div class="container border-1 shadow-sm mt-3">
            <table width="100%">
              <tr>
                <td rowspan="2" class="column-file-type-icon" v-if="file.valid_file">
                  <img alt="" class="custom_thumbnail" v-bind:src="icons[file.name.split('.').pop()]"/>
                </td>
                <td rowspan="2" class="column-file-type-icon" v-else>
                  <img alt="" class="custom_thumbnail" src="/invalid-filetype-icon.png"/>
                </td>
                <td>{{ file.name }}&nbsp;</td>
                <td rowspan="2" class="column-file-size">{{ Math.round(file.size / 1000) + "Kb" }}&nbsp;</td>
                <td rowspan="2" class="column-file-type-icon">
                  <button class="remove-file-button" type="button" @click="removeFile(files.indexOf(file))">
                    <img alt="" class="custom_thumbnail" src="/red_x.png"/>&nbsp;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-if="file.valid_file" class="file-upload valid-file-type">
                    Valid file.
                  </div>
                  <div v-else class="file-upload invalid-file-type">
                    Invalid file.
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="container bg-light">
          <button class="base-button clear-button" type="button" @click="clearFiles">
            Clear
          </button>
          <button class="base-button run-button" type="button" @click="submitFiles">
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
      status: false,
      isDragging: false,
      files: [],
      files2: {},
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
    clearFiles() {
      this.files = []
    },
    dragover(e) {
      // Prevent Files From Being Opened
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      // Prevent Files From Being Opened
      e.preventDefault()
      // Mark Valid / Invalid File Types
      if (e.dataTransfer.files) {
        [...e.dataTransfer.files].forEach((file) => {
          if (this.getFileExtension(file.name) in this.icons) {
            file["valid_file"] = true
            this.files.push(file)
          } else {
            file["valid_file"] = false
            this.files.push(file)
          }
        })
      }
      this.isDragging = false
    },
    getFileExtension(filename) {
      return filename.split('.').pop()
    },
    handleFileUpload() {
      this.files.push.apply(this.files, [...this.$refs.file.files])
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

.base-button {
  color:white;
  border-style: solid;
  border-color: #2d53af;
  margin-top: 2rem;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #2d53af;
}

.choose-file-button {
  cursor: pointer;
  font-style: italic;
  color: #adcdec;
}

.clear-button {
  float: left;
}

.custom_thumbnail {
  width: 30px;
  height: 30px;
}

.column-file-type-icon {
  width: 50px;
  justify-content: center;
}

.column-file-size {
  width: 100px;
  justify-content: left;
}

.dropzone-container {
    padding: 1rem;
    background: #f7fafc;
    border: 2px dashed #e2e8f0;
    margin-top: 1rem;
    text-align: center;
}

.file-upload {
    font-style: italic;
    font-size: 12px;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.invalid-file-type {
  color: red;
}

.remove-file-button {
  border: none;
  background-color: white;
}

.run-button {
  float: right;
}

.upload-icon {
  opacity: 0.5;
  width: 40px;
  height: 40px;
  margin-bottom: 0.5em;
}

.valid-file-type {
  color: green;
}

</style>

