/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils"
import UploadFiles from "@/components/UploadFiles.vue"
import { describe, expect, test } from "vitest"


describe('Method Tests', () => {
    it('bytesToGB', () => {
        expect(UploadFiles.methods.bytesToGB(5472345124)).equals(5.09651855006814)
    })
})

test("check file clear", async ()=> {
    expect(UploadFiles.methods.clearFiles()).equals(false)
})

