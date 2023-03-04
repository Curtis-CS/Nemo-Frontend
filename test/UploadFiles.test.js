/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils"
import UploadFiles from "@/components/UploadFiles.vue"
import { describe, expect, test } from "vitest"

test("get file size status", async ()=> {
    expect(UploadFiles.methods.testFunction()).equals(true)
})

