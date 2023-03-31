import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            result_images: null
        }
    },
    mutations: {
        insertFile (state, file) {
            state.result_images = file
        },
    }
  }
)