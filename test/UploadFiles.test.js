/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils"
import UploadFiles from "@/components/UploadFiles.vue"
import { describe, expect, test } from "vitest"

// Author: Michael Moosmuller
describe('method tests', () => {
    it('run_status is false by default', () => {
        const wrapper = mount(UploadFiles)
        expect(wrapper.vm.run_status).equals(false)
    })

})

// Author: Ian Ayers
test("check file clear", async ()=> {
    expect(UploadFiles.methods.clearFiles()).equals(false)
})

