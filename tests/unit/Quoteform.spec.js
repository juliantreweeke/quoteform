import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import Quoteform from '../../src/components/Quoteform/Quoteform.vue'
import Numberslider from '../../src/components/Quoteform/Numberslider.vue'

describe('Quoteform.vue', () => {
  let wrapper
  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = shallowMount(Quoteform, {
      localVue
    })
  })

  it('renders a vue instance', () => {
    expect(shallowMount(Quoteform).isVueInstance()).toBe(true)
  })

  it('check if child Numberslider exists', () => {
    expect(wrapper.contains(Numberslider)).toBe(true)
  })
})
