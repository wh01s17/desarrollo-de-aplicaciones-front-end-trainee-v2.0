import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('monta y muestra el formulario de acceso', () => {
    const wrapper = mount(App)
    const form = wrapper.find('[data-testid="access-form"]')

    expect(wrapper.text()).toContain('Plataforma Educativa')
    expect(form.exists()).toBe(true)
  })
})
