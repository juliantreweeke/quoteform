import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import Quoteform from '../../src/components/Quoteform/Quoteform.vue'
import Numberslider from '../../src/components/Quoteform/Numberslider.vue'
import Buttongroup from '../../src/components/Quoteform/Buttongroup.vue'
import Vuelidate from 'vuelidate'
import Vue from 'vue'
Vue.use(Vuelidate)

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

  it('check if child Buttongroup exists', () => {
    expect(wrapper.contains(Buttongroup)).toBe(true)
  })

  it('on submit button click submit function is called', () => {
    // const submitButton = wrapper.find('button.submit-button')
    const mockMethod = jest.fn()
    wrapper.setMethods({
      submit: mockMethod
    })

    wrapper.find('button.yes').trigger('click')

    expect(mockMethod).toBeCalled()

    // console.log(wrapper.find('button.submit-button').debug())
    // expect(submitButton.length).toBe(1)
  })
})
