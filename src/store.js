import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            resultsExist: false,
            result_images: null
        }
    },
    mutations: {
        clearFiles (state) {
            state.result_images = null
            state.resultsExist = false
        },
        exist (state) {
            state.resultsExist = true
        },
        insertFile (state, file) {
            state.result_images = file
        },
    }
  }
)