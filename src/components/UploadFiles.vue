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
        <div v-for="file in files" :key="file.name">
          <div class="container border-1 shadow-sm mt-3">
            <table width="100%">
              <tr>
                <td rowspan="2" class="column-file-type-icon" v-if="file.valid_file">
                  <img alt="" class="custom_thumbnail" v-bind:src="icons[file.name.split('.').pop().toLowerCase()]"/>
                </td>
                <td rowspan="2" class="column-file-type-icon" v-else>
                  <img alt="" class="custom_thumbnail" src="/invalid-filetype-icon.png"/>
                </td>
                <td class="column-file-name">{{ file.name }}&nbsp;</td>
                <td rowspan="2" class="column-file-size">{{ bytesToSize(file.size, 0) }}&nbsp;</td>
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
          <button id="clear" class="base-button clear-button" type="button" @click="clearFiles">
            Clear
          </button>
          <button :disabled="run_status" class="base-button run-button" type="button" @click="submitFiles">
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
      run_status: false,
      isDragging: false,
      files: [],
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
    testFunction() {
      return true
    },
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
        } else {
          file["valid_size"] = false
          file["valid_file"] = false
          this.run_status = true
          this.files.push(file)
        }
      }
    },
    clearFiles() {
    /**
     * Function to delete the current files when the "Clear" button is pressed.
     */
      this.files = []
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
    bytesToSize(bytes, precision) {
      /**
       * Function to convert file size to proper notation.
       * @author Andris Causs
       * @param size Size of the file.
       * @source https://web.archive.org/web/20120507054320/http://codeaid.net/javascript/convert-size-in-bytes-to-human-readable-format-(javascript)
       */
      var kilobyte = 1024;
      var megabyte = kilobyte * 1024;
      var gigabyte = megabyte * 1024;
      var terabyte = gigabyte * 1024;

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
    getFileSizeStatus(file) {
    /**
     * Function to check the size of a file.
     * 1MB = 1048576 B's, 1GB = 1048576000 MB's
     * @param file File being checked.
     * @returns {boolean} File size is valid or not.
     */
      console.log(file.size <= 1048576000)
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
      this.verifyFiles()
    },
    submitFiles() {
      /**
       * Function to submit files to the back-end server.
       * @type {FormData}
       */
      var image = this.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = () => {
        this.imageB64Data = reader.result
      }

      axios.post('http://127.0.0.1:5000', { imageB64Data: this.imageB64Data }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })

      // let formData = new FormData()
      // for (let i = 0; i < this.files.length; i++) {
      //   let file = this.files[i]
      //   formData.append(this.name, file)
      // }
      // // Axios Request to Back-End Server
    },
    verifyFiles() {
    /**
     * Function to verify if the list of files are all valid file types before submission.
     */
      for (let i = 0; i < this.files.length; i++) {
        if (!(this.files[i]["valid_file"]) && !(this.files[i]["valid_size"])) {
          this.run_status = true
          break
        }
        else {
          this.run_status = false
        }
      }
    }
  }
}
</script>

<style scoped>

.base-button {
  color:black;
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