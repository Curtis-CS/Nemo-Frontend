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
            @change="handleFileUpload">
        <div><img alt="" class=upload-icon src="/file_types/upload-icon.png"/></div>
        <label class="" for="fileInput">
          <span>Drag and Drop or <u class="choose-file-button">choose files</u>.</span>
        </label>
      </div>
      <div v-if="uploadFiles.length">
        <!--List of File Uploads-->
        <ul class="ul mt-1">
          <li v-for="file in uploadFiles">
            <div class="container border-1 shadow-sm mt-3">
              <table class="custom_table">
                <tr>
                  <!--File Type Icon-->
                  <td v-if="file.valid_type" class="column-file-type-icon" rowspan="2">
                    <img alt="" class="custom_thumbnail" v-bind:src="icons[file.name.split('.').pop().toLowerCase()]"/>
                  </td>
                  <td v-else class="column-file-type-icon" rowspan="2">
                    <img alt="" class="custom_thumbnail" src="/file_types/invalid-filetype-icon.png"/>
                  </td>
                  <!--File Name-->
                  <td class="column-file-name">{{ file.name }}&nbsp;</td>
                  <!--File Size-->
                  <td class="column-file-size" rowspan="2">{{ bytesToSize(file.size, 0) }}&nbsp;</td>
                  <!--Remove File Icon-->
                  <td class="column-file-type-icon" rowspan="2">
                    <button class="remove-file-button" type="button" @click="removeFile(uploadFiles.indexOf(file))">
                      <img alt="" class="custom_thumbnail" src="/red_x.png"/>&nbsp;
                    </button>
                  </td>
                </tr>
                <tr>
                  <!--File Status-->
                  <td v-if="file.valid_type" class="file-upload valid-file-type">
                    Valid file.
                  </td>
                  <td v-else class="file-upload invalid-file-type">
                    Invalid file.
                  </td>
                </tr>
              </table>
            </div>
          </li>
        </ul>
        <!--Upload information-->
        <div class="container border-top status min-container-height">
          <table class="custom_table1 mt-2">
            <tr>
              <!--Run Status-->
              <td v-if="getStatus() === 'pending'" class="custom_table_column2 align-left valid-file-type">Files submitted.</td>
              <td v-if="getStatus() === 'success' && submitted"> {{ redirect() }} </td>
              <td v-if="getStatus() === 'failed'" class="custom_table_column2 align-left invalid-file-type">Can't process files!</td>

              <td class="custom_table_column"> Status: </td>
              <!--Number of Files-->
              <td v-if="invalidNumUploadFiles" class="custom_table_column align-right invalid-file-type">
                {{ getNumFiles() }} / 20
              </td>
              <td v-else class="custom_table_column align-right valid-file-type">
                {{ getNumFiles() }} / 20
              </td>
              <!--Total Upload Size-->
              <td v-if="invalidSizeUploadFiles" class="custom_table_column1 align-right invalid-file-type">
                {{ bytesToSize(totalUploadSize, 0) }} / 1 GB
              </td>
              <td v-else class="custom_table_column1 align-right valid-file-type">
                {{ bytesToSize(totalUploadSize, 0) }} / 1 GB
              </td>
            </tr>
          </table>
        </div>
        <!--File Submission-->
        <div class="container min-container-height mt-4">
          <button id="clear" class="base-button clear-button" type="button" @click="clearFiles">
            Clear
          </button>
          <button :disabled="runStatus" class="base-button run-button align-right" type="button" @click="submitFiles">
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
import axios from 'axios'
import { store } from "../store"
import { router } from "../router"
import JSZip from 'jszip'

export default {
  data() {
    return {
      icons: {
        gif: '/file_types/gif-icon.png',
        jpg: '/file_types/jpeg-icon.png',
        jpeg: '/file_types/jpeg-icon.png',
        mkv: '/file_types/mkv-icon.png',
        mov: '/file_types/mov-icon.png',
        mp4: '/file_types/mp4-icon.png',
        mpeg: '/file_types/mpeg-icon.png',
        png: '/file_types/png-icon.png'
      },
      invalidNumUploadFiles: false,
      invalidSizeUploadFiles: false,
      isDragging: false,
      processingFiles: false,
      runStatus: false,
      submitted: false,
      totalUploadSize: 0,   // bytes
      uploadFiles: [],
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
          file["valid_type"] = true
          this.uploadFiles.push(file)
        } else {
          file["valid_type"] = false
          this.runStatus = true
          this.uploadFiles.push(file)
        }
        this.verifyFiles()
      }
    },
    bytesToGB(bytes) {
      /**
       * Function to convert bytes to GB.
       * Adapted from function "bytesToSize."
       */
      let gigabyte = 1024 * 1024 *1024
      return bytes / gigabyte
    },
    bytesToSize(bytes, precision) {
      /**
       * Function to convert file size to proper notation.
       * @author Andris Causs
       * @param size Size of the file.
       * @source https://web.archive.org/web/20120507054320/http://codeaid.net/javascript/convert-size-in-bytes-to-human-readable-format-(javascript)
       */
      let kilobyte = 1024
      let megabyte = kilobyte * 1024
      let gigabyte = megabyte * 1024
      let terabyte = gigabyte * 1024

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
      this.uploadFiles = []
      this.runStatus = false
      store.commit('setStatus', "")
      return this.uploadFiles === [] && this.runStatus === false;
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
      for (let i = 0; i < this.uploadFiles.length; i++) {
        if (this.uploadFiles[i]["name"] === name) {
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
       * 1GB = 1048576000 MB's
       * @param file File being checked.
       * @returns {boolean} File size is valid or not.
       */
      return file.size <= 1048576000;
    },
    getNumFiles() {
      /**
       * Function to return number of files in upload.
       */
      return this.uploadFiles.length
    },
    getStatus() {
      /**
       * Function to return status.
       */
      return store.state.status;
    },
    getTotalUploadSize() {
      /**
       * Function to return total size of file uploads.
       */
      this.totalUploadSize = 0
      for (let i = 0; i < this.uploadFiles.length; i++) {
        this.totalUploadSize += this.uploadFiles[i].size
      }
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
    redirect () {
      /**
       * Function to redirect to results page.
       */
      router.push('/results')
      return true
    },
    removeFile(i) {
      /**
       * Function to remove a file from the list.
       * @param i Index of the file in the list.
       */
      this.uploadFiles.splice(i, 1)
      this.verifyFiles()
    },
    SortFiles(a, b) {
      const typeA = a.name.split(".").pop()
      const typeB = b.name.split(".").pop()
      console.log(typeA)
      console.log(typeB)
      if (typeA === "mp4" && typeB !== "mp4")
      {
        return 1
      }
      else if (typeA !== "mp4" && typeB === "mp4")
      {
        return -1
      }
      else
      {
        return 1
      }
    },
    submitFiles() {
      /**
       * Function to submit files to the back-end server and save results.
       * Files are send one at a time.
       */
      let filesLeftToSend = this.uploadFiles.length

      this.uploadFiles = this.uploadFiles.sort(this.SortFiles)
      // let x = 0
      // while (x < this.uploadFiles.length)
      // {
      //   console.log(this.uploadFiles[x])
      //   x++
      // }

      for (let i = 0; i < this.uploadFiles.length; i++) {
        let file = this.uploadFiles[i]
        let formData = new FormData()
        formData.append('filesLeft', filesLeftToSend)
        formData.append('runType', store.state.single_class_option)
        formData.append('attention_weights', store.state.attention_weights_option)
        formData.append('file', file)
        filesLeftToSend = filesLeftToSend - 1
        this.submitted = true
        store.commit('setStatus', "pending")
        axios.post('http://127.0.0.1:5000', formData, {
          responseType: 'blob'
        })
          .then(function (response) {
            // store.state.status = "success"
            //console.log(response.data.type)
            if (response.data.type == "application/zip")
            {
              const zip = new JSZip()
              zip.loadAsync(response.data).then((zipContents) => {
                //Get each file in zip
                zipContents.forEach((path, curZippedFile) => {
                  //if file or directory
                  if (!curZippedFile.dir) {
                    //get the file as a blob
                    curZippedFile.async("blob").then((fileBlob) => {
                      const file = new File([fileBlob], curZippedFile.name)
                      store.commit('insertFileObject', file)
                      let fileName = file.name
                      const lastSlashIndex = fileName.lastIndexOf("/") + 1
                      fileName = fileName.substring(lastSlashIndex)
                      console.log(fileName)
                      if (fileName === "stats.txt")
                      {
                        console.log("STATS DETECTED")
                        const reader = new FileReader()
                        reader.onload = function () {
                          const lines = reader.result.split("\n")
                          console.log(lines.length)
                          store.state.nemoAvg = lines[0]
                          store.state.nemoDetected = lines[2]
                          store.state.nemoDuration = lines[1]
                          store.state.nemoTotal = lines[3]
                        }
                        reader.readAsText(file)
                      }
                      else
                      {
                        const imageGotten = document.createElement("img")
                        imageGotten.src = URL.createObjectURL(file)
                        store.commit('insertFile', imageGotten.src)
                        store.commit('insertFileName', fileName)
                      }
                    })
                  }
                })
                store.commit('setStatus', "success")
              })
            }
          })
          .catch(function (error) {
            store.commit('setStatus', "failed")
          })
      }
    },
    verifyFiles() {
      /**
       * Function to verify input before submission.
       * When runStatus is true, the "Run" button is disabled.
       * Correct Filetypes: this.icons.
       * Max number of files: 25
       * Max upload size: 1GB
       */
      this.invalidNumUploadFiles = this.uploadFiles.length > 20
      if (this.invalidNumUploadFiles) {
        this.runStatus = true
        return
      }
      this.getTotalUploadSize()
      this.invalidSizeUploadFiles = this.bytesToGB(this.totalUploadSize, 2) > 1
      if (this.invalidSizeUploadFiles) {
        this.runStatus = true
        return
      }
      for (let i = 0; i < this.uploadFiles.length; i++) {
        this.runStatus = !(this.uploadFiles[i]["valid_type"])
        if (this.runStatus) {
          this.runStatus = true
          return
        }
      }
    }
  }
}
</script>

<style scoped>

.align-right {
  text-align: right;
}

.base-button {
  color: black;
  border-radius: 25px;
  border-style: solid;
  border-color: #d8d8d8;
  border-width: thin;
  /*margin-top: 2rem;*/
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

.custom_table {
  width: 100%;
}

.custom_table1 {
  float: right;
}

.custom_table_column {
  width: 50px;
}

.custom_table_column1 {
  width: 90px;
}

.custom_table_column2 {
  width: 226px;
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
  min-width: 400px;
}

.min-container-height {
  min-height: 35px;
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

.status {
  font-size: 12px;
  font-style: italic;
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