import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            result_images: []
        }
    },
    mutations: {
        insertFile (state, file) {
            state.result_images.push(file)
        },
    }
  }
)