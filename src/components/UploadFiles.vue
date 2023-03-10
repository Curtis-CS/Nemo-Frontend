<template>
  <div class="card mt-5 min-card-width" style="width: auto">
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
        <ul class="ul mt-1">
          <li v-for="file in files">
            <div class="container border-1 shadow-sm mt-3">
              <table width="100%">
                <tr>
                  <td v-if="file.valid_file" class="column-file-type-icon" rowspan="2">
                    <img alt="" class="custom_thumbnail" v-bind:src="icons[file.name.split('.').pop().toLowerCase()]"/>
                  </td>
                  <td v-else class="column-file-type-icon" rowspan="2">
                    <img alt="" class="custom_thumbnail" src="/invalid-filetype-icon.png"/>
                  </td>
                  <td class="column-file-name">{{ file.name }}&nbsp;</td>
                  <td class="column-file-size" rowspan="2">{{ bytesToSize(file.size, 0) }}&nbsp;</td>
                  <td class="column-file-type-icon" rowspan="2">
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
          </li>
        </ul>
        <div class="container bg-light">
          <button id="clear" class="base-button clear-button" type="button" @click="clearFiles">
            Clear
          </button>
          <button :disabled="run_status" class="base-button run-button" type="button" @click="submitFiles">
            Run
          </button>
        </div>
      </div>
    </div>
    <div v-if="processingFiles" class="InitialPadding">
      <h2 class="display-6 lh-1 mb-5" style="margin-left: 5vw;">Processing</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
//import {saveAs} from 'file-saver';

export default {
  data() {
    return {
      run_status: false,
      isDragging: false,
      processingFiles: false,
      files: [],
      filesNames: [],
      filesize: '',
      imageB64Data: null,
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
    addFile(file) {
      /**
       * Function to add a file to the files list.
       * Ensures duplicate files don't exist.
       * Assigns valid or invalid file size to file.
       * Assigns valid or invalid file type to file.
       * @param file The file information and data.
       */
      if (!(this.fileExists(file["name"]))) {
        if (this.getFileSizeStatus(file) && this.getFileExtension(file.name) in this.icons) {
          file["valid_size"] = true
          file["valid_file"] = true
          this.files.push(file)
          this.filesNames.push(file.name)
        } else {
          file["valid_size"] = false
          file["valid_file"] = false
          this.run_status = true
          this.files.push(file)
          this.filesNames.push(file.name)
        }
      }
    },
    bytesToSize(bytes, precision) {
      /**
       * Function to convert file size to proper notation.
       * @author Andris Causs
       * @param size Size of the file.
       * @source https://web.archive.org/web/20120507054320/http://codeaid.net/javascript/convert-size-in-bytes-to-human-readable-format-(javascript)
       */
      const kilobyte = 1024;
      const megabyte = kilobyte * 1024;
      const gigabyte = megabyte * 1024;
      const terabyte = gigabyte * 1024;

      if ((bytes >= 0) && (bytes < kilobyte)) {
        return bytes + ' B';

      } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
        return (bytes / kilobyte).toFixed(precision) + ' KB';

      } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
        return (bytes / megabyte).toFixed(precision) + ' MB';

      } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
        return (bytes / gigabyte).toFixed(precision) + ' GB';

      } else if (bytes >= terabyte) {
        return (bytes / terabyte).toFixed(precision) + ' TB';

      } else {
        return bytes + ' B';
      }
    },
    clearFiles() {
      /**
       * Function to delete the current files when the "Clear" button is pressed.
       */
      this.files = []
      this.filesNames = []
      this.run_status = false
      return this.files === [] && this.run_status === false;
    },
    dragleave() {
      /**
       * Function to set isDragging property when files stop moving over drop box area.
       */
      this.isDragging = false;
    },
    dragover(e) {
      /**
       * Function to handle dragging files over the drop box area.
       * @param e Event from user.
       */
      e.preventDefault()
      this.isDragging = true;
    },
    drop(e) {
      /**
       * Function to handle files being dropped into the drop box area.
       * @param e Event of dropping files.
       */
      e.preventDefault()
      if (e.dataTransfer.files) {
        [...e.dataTransfer.files].forEach((file) => {
          this.addFile(file)
        })
      }
      this.isDragging = false
    },
    fileExists(name) {
      /**
       * Function to verify if a file exists within the file list.
       * @param name Name of the file.
       * @returns {boolean} File exists or not.
       */
      for (let i = 0; i < this.files.length; i++) {
        if (this.files[i]["name"] === name) {
          return true
        }
      }
      return false
    },
    getFileExtension(filename) {
      /**
       * Function to get file extension type.
       * @param filename Name of the file.
       * @returns {*} File extension type.
       */
      return filename.split('.').pop().toLowerCase()
    },
    getFileSizeStatus(file) {
      /**
       * Function to check the size of a file.
       * 1MB = 1048576 B's, 1GB = 1048576000 MB's
       * @param file File being checked.
       * @returns {boolean} File size is valid or not.
       */
      // console.log(file.size <= 1048576000)
      return file.size <= 1048576000;
    },
    handleFileUpload() {
      /**
       * Function to handle file upload from selected files.
       */
      let files = [...this.$refs.file.files]
      for (let i = 0; i < files.length; i++) {
        this.addFile(files[i])
      }
    },
    removeFile(i) {
      /**
       * Function to remove a file from the list.
       * @param i Index of the file in the list.
       */
      this.files.splice(i, 1);
      this.filesNames.splice(i, 1);
      this.verifyFiles()
    },
    submitFiles() {
      /**
       * Function to submit files to the back-end server.
       * @type {FormData}
       */
      let filesLeftToSend = this.files.length
      for (let i = 0; i < this.files.length; i++) {
        let file = this.files[i]
        let formData = new FormData()
        formData.append('filesLeft', filesLeftToSend)
        formData.append('file', file)
        filesLeftToSend = filesLeftToSend - 1
        axios.post('http://127.0.0.1:5000', formData, {
          responseType: 'blob'
        })
            .then(function (response) {
              //console.log(response)
              console.log("Results Recieved")
              //this.$store.commit("addFile", file)
              var recievedFileSize = response.data.size
              if (recievedFileSize > 25) {
                var blob = new Blob([response.data])
                var url = window.URL.createObjectURL(blob)
                var link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'results.zip')
                document.body.appendChild(link)
                link.click()
              }
              //saveAs(response.data, filename)
            })
            .catch(function (error) {
              console.log(error)
            })
      }
    },
    verifyFiles() {
      /**
       * Function to verify if the list of files are all valid file types before submission.
       */
      for (let i = 0; i < this.files.length; i++) {
        if (!(this.files[i]["valid_file"]) && !(this.files[i]["valid_size"])) {
          this.run_status = true
          break
        } else {
          this.run_status = false
        }
      }
    }
  }
}
</script>

<style scoped>

.base-button {
  color: black;
  border-radius: 25px;
  border-style: solid;
  border-color: #d8d8d8;
  border-width: thin;
  margin-top: 2rem;
  padding-right: 20px;
  padding-left: 20px;
}

.choose-file-button {
  cursor: pointer;
  font-style: italic;
  color: #adcdec;
}

.clear-button {
  float: left;
  background-color: #ffffff;
}


.column-file-name {
  min-width: 100px;
}

.column-file-size {
  min-width: 65px;
  text-align: right;
}

.column-file-type-icon {
  width: 50px;
  vertical-align: middle;
  text-align: center;
}


.custom_thumbnail {
  width: 30px;
  height: 30px;
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

.min-card-width {
  min-width: 280px;
}

.remove-file-button {
  border: none;
  background-color: white;
}

.run-button {
  float: right;
  background-color: #ffffff;
}

.run-button:disabled {
  float: right;
  background-color: grey;
}

.ul {
  overflow: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 630px;
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