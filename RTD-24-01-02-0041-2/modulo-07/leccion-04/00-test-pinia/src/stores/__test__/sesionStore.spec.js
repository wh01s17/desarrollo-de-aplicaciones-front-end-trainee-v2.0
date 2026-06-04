import { it, describe, expect, beforeEach } from 'vitest'
import { useSesionStore } from '../sesionStore'
import { setActivePinia, createPinia } from 'pinia'

describe('sesionStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("la action 'entrar' marca la sesion logueada", () => {
    const sesion = useSesionStore()

    sesion.entrar()

    expect(sesion.logueado).toBe(true)
  })
})
