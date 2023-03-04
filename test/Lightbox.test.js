/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils"
import Lightbox from "@/components/Lightbox.vue"
import { describe, expect, test } from "vitest"

// Author: Curtis Burchfield
describe('Checking Props input into Lightbox', () => {
    it('Checking Array of images', () => {
        const wrapper = mount(Lightbox, { 
            propsData: {
                images: [
                    '/TumbleWeed_fire_CA_2021Jul.png', '/CaughlinRanch_PineHaven_fire_Nov2020.png',
                    '/neat.gif', '/TumbleWeed_fire_CA_2021Jul.png'
                ],
                imagesLength: 4
            }
        })
        expect(wrapper.props().images).toStrictEqual([
            '/TumbleWeed_fire_CA_2021Jul.png', '/CaughlinRanch_PineHaven_fire_Nov2020.png',
            '/neat.gif', '/TumbleWeed_fire_CA_2021Jul.png'
        ])
        expect(wrapper.props().imagesLength).toBe(4)
    })
})

