import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            result_images: [],
            status: ""
        }
    },
    mutations: {
        insertFile (state, file) {
            state.result_images.push(file)
        },
        setStatus (state, msg) {
            state.status = msg
        }
    }
  }
)