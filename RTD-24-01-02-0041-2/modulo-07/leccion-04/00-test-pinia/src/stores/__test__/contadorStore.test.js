import { describe, it, expect, beforeEach } from 'vitest'
import { useContadorStore } from '../contadorStore'
import { createPinia, setActivePinia } from 'pinia'

describe('contadorStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('suma de 2 numeros', () => {
    const resultado = 2 + 2

    expect(resultado).toBe(4)
  })

  // test de state de pinia (valor por defecto)
  it('inicia con valor = 0', () => {
    // Arrange: prepara el escenario
    const contador = useContadorStore()

    // Assert: verificamos el resultado observable
    expect(contador.valor).toBe(0)
  })

  // test de action incrementar de pinia
  it("la action 'incrementar' suma 1 al valor", () => {
    // Arrange
    const contador = useContadorStore()

    // Act
    contador.incrementar()

    // Assert
    expect(contador.valor).toBe(1)
  })

  // test getter que vuelve el doble del valor
  it("el getter 'doble' devuelve el doble del valor", () => {
    // Arrange
    const contador = useContadorStore()

    // Act
    contador.valor = 4

    // Assert
    expect(contador.doble).toBe(8)
  })

  // test action decrementar
  it("la action 'decrementar' resta 1 al valor", () => {
    // Arrange
    const contador = useContadorStore()

    // Act
    contador.decrementar()

    // Assert
    expect(contador.valor).toBe(-1)
  })

  // test action reiniciar
  it("la action 'reiniciar' establece el valor en 0", () => {
    // Arrange
    const contador = useContadorStore()

    // Act
    contador.valor = 5
    contador.reiniciar()

    // Assert
    expect(contador.valor).toBe(0)
  })
})
