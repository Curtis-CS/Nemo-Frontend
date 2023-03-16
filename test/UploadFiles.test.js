/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils"
import UploadFiles from "@/components/UploadFiles.vue"
import { describe, expect, test, it } from "vitest"

describe('Method Tests', () => {
    it('bytesToGB', () => {
        expect(UploadFiles.methods.bytesToGB(5472345124)).equals(5.09651855006814)
    })
    it.each([
        [324, 0, '324 B'],
        [54345, 0, '53 KB'],
        [89466217, 0, '85 MB'],
        [39834287448, 0, '37 GB'],
        [34983489457845, 0, '32 TB'],
        [34983489, 1, '33.4 MB'],
        [34983489, 2, '33.36 MB'],
        [34983489, 3, '33.363 MB'],
        [34983489, 4, '33.3629 MB'],
        [34983489, 5, '33.36285 MB']
    ])('bytesToSize(%i, %i, %s)', (a, b, expected) => {
        expect(UploadFiles.methods.bytesToSize(a, b)).equals(expected)
    })
})

test("check file clear", async ()=> {
    expect(UploadFiles.methods.clearFiles()).equals(false)
})

