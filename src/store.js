import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            result_images: [],
            single_class_option: true,
            result_images_names: []
        }
    },
    mutations: {
        insertFile (state, file) {
            state.result_images.push(file)
        },
        insertFileName (state, fileName) {
            state.result_images_names.push(fileName)
        }
    }
  }
)