import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AccessForm from '../AccessForm.vue'

describe('AccessForm.vue', () => {
  // Test 1: Render inicial
  it('renderiza email, codigo y boton, y el boton se inicia deshabilitado', () => {
    // Arrange
    const wrapper = mount(AccessForm)

    // Act
    const emailInput = wrapper.find('[data-testid="email-input"]')
    const codeInput = wrapper.find('[data-testid="access-code-input"]')
    const button = wrapper.find('[data-testid="submit-button"]')

    // Assert
    // Verificamos que los elementos existan
    expect(emailInput.exists()).toBe(true)
    expect(codeInput.exists()).toBe(true)
    expect(button.exists()).toBe(true)

    // el boton arranca deshabilitado
    expect(button.attributes('disabled')).toBeDefined()
  })

  // Test 2: Habilitación del botón con datos válidos
  it('habilita el botón cuando el email es válido y el código no está vacío', async () => {
    // Arrange
    const wrapper = mount(AccessForm)

    // Act
    const emailInput = wrapper.find('[data-testid="email-input"]')
    const codeInput = wrapper.find('[data-testid="access-code-input"]')
    const button = wrapper.find('[data-testid="submit-button"]')

    await emailInput.setValue('test@test.com')
    await codeInput.setValue('abc123')

    //Assert
    expect(button.attributes('disabled')).toBeUndefined()
  })

  // Test 3: Email inválido, debe mostrar un error y mantener el boton deshabilitado
  it('muestra mensaje de error y mantiene el botón deshabilitado con email inválido', async () => {
    const wrapper = mount(AccessForm)

    const emailInput = wrapper.find('[data-testid="email-input"]')
    const codeInput = wrapper.find('[data-testid="access-code-input"]')

    await emailInput.setValue('correo-invalido')
    await codeInput.setValue('abc123')

    const error = wrapper.find('[data-testid="email-error"]')
    expect(error.exists()).toBe(true)

    const button = wrapper.find('[data-testid="submit-button"]')
    expect(button.attributes('disabled')).toBeDefined()
  })

  // Test 4: Submit válido emite el evento con el payload correcto
  it('emite "submit" con el email sin espacios (trim), y el código al enviar', async () => {
    const wrapper = mount(AccessForm)

    const emailInput = wrapper.find('[data-testid="email-input"]')
    const codeInput = wrapper.find('[data-testid="access-code-input"]')
    await emailInput.setValue('test@test.com')
    await codeInput.setValue('abc123')

    const form = wrapper.find('[data-testid="access-form"]')
    await form.trigger('submit.prevent')

    const submitEvents = wrapper.emitted('submit')
    expect(submitEvents).toHaveLength(1)

    // emitted, guarda un array de emisiones, y cada emisión es un array
    expect(submitEvents[0][0]).toEqual({
      email: 'test@test.com',
      accessCode: 'abc123',
    })
  })

  // Test 5: Limpieza despues del submit
  it('limpia el código después del subbmit y mantiene el email', async () => {
    const wrapper = mount(AccessForm)
    const emailInput = wrapper.find('[data-testid="email-input"]')
    const codeInput = wrapper.find('[data-testid="access-code-input"]')

    await emailInput.setValue('test@test.com')
    await codeInput.setValue('abc123')

    const form = wrapper.find('[data-testid="access-form"]')
    await form.trigger('submit.prevent')

    expect(codeInput.element.value).toBe('')
    expect(emailInput.element.value).toBe('test@test.com')
  })
})
