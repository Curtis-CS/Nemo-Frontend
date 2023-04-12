import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            result_images: [],
            result_file_objects: [],
            single_class_option: true,
            result_images_names: [],
            status: ""
        }
    },
    mutations: {
        insertFile (state, file) {
            state.result_images.push(file)
        },
        insertFileName (state, fileName) {
            state.result_images_names.push(fileName)
        },
        setStatus (state, msg) {
            state.status = msg
        },
        insertFileObject (state, file) {
            state.result_file_objects.push(file)
        }
    }
  }
)