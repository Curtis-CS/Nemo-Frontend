import {createStore} from 'vuex'

export const store = createStore({
        state() {
            return {
                result_images: [],
                result_file_objects: [],
                single_class_option: false,
                attention_weights_option: false,
                iou_threshold_option: .2,
                nmsup_option: .2,
                result_images_names: [],
                status: "",
                nemoAvg: 0,
                nemoDuration: 0,
                nemoDetected: 0,
                nemoTotal: 0
            }
        },
        mutations: {
            insertFile(state, file) {
                state.result_images.push(file)
            },
            insertFileName(state, fileName) {
                state.result_images_names.push(fileName)
            },
            setStatus(state, msg) {
                state.status = msg
            },
            insertFileObject(state, file) {
                state.result_file_objects.push(file)
            }
        }
    }
)