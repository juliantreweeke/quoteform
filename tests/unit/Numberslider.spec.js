import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import Numberslider from '../../src/components/Quoteform/Numberslider.vue'

describe('Numberslider.vue', () => {
  let wrapper
  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = shallowMount(Numberslider, {
      localVue
    })
  })

  it('renders a vue instance', () => {
    expect(shallowMount(Numberslider).isVueInstance()).toBe(true)
  })

  it('should have number 1 as default value', () => {
    expect(wrapper.find('.numberslider__value').text())
      .toBe('1')
  })

  it('on plus value should increase to equal 2', () => {
    wrapper.find('.numberslider').setValue('2')

    expect(wrapper.find('.numberslider__value').text())
      .toBe('2')
  })

  it('on set value to maximum 7 text should show 7', () => {
    wrapper.find('.numberslider').setValue('7')
    expect(wrapper.find('.numberslider__value').text())
      .toBe('7')
  })
})
