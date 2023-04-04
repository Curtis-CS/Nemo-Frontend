import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            result_images: [],
<<<<<<< HEAD
            single_class_option: true,
            result_images_names: []
=======
            status: ""
>>>>>>> 8da4ce3b15f569472166efd64393e05d3b339b23
        }
    },
    mutations: {
        insertFile (state, file) {
            state.result_images.push(file)
        },
<<<<<<< HEAD
        insertFileName (state, fileName) {
            state.result_images_names.push(fileName)
=======
        setStatus (state, msg) {
            state.status = msg
>>>>>>> 8da4ce3b15f569472166efd64393e05d3b339b23
        }
    }
  }
)