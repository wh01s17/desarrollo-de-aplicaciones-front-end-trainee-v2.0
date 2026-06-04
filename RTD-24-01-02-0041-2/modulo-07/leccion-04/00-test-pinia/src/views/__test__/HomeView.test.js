import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import HomeView from '../HomeView.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('HomeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renderiza el valor inicial del contador y su doble', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.text()).toContain('Valor: 0')
    expect(wrapper.text()).toContain('Doble (getter): 0')
  })

  it("al hacer click en '+', aumenta el valor", async () => {
    // Arrange
    const wrapper = mount(HomeView)
    const botonMas = wrapper.findAll('button').find((b) => b.text() === '+')

    // Act
    await botonMas.trigger('click')

    // Assert
    expect(wrapper.text()).toContain('Valor: 1')
    expect(wrapper.text()).toContain('Doble (getter): 2')
  })
})
