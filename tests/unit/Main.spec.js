import {
  // mount,
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import Main from '@/components/Main.vue'
import Banner from '@/components/Banner.vue'
import Quoteform from '../../src/components/Quoteform/Quoteform.vue'

describe('Main.vue', () => {
  let wrapper
  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = shallowMount(Main, {
      localVue
    })
  })

  it('renders a vue instance', () => {
    expect(shallowMount(Main).isVueInstance()).toBe(true)
  })

  it('check if child Banner exists', () => {
    expect(wrapper.contains(Banner)).toBe(true)
  })
  it('check if child Quoteform exists', () => {
    expect(wrapper.contains(Quoteform)).toBe(true)
  })
})
