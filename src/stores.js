// ComponentService.js
import { writable } from 'svelte/store'

export const resume = writable(null)

export const searchQuery = writable('')

export const techs = writable({ children: [] })

export const loads = writable([])

// Define the component service
export const componentService = (() => {
  const { subscribe, set } = writable([])

  const openComponent = (component) => {
    set((components) => [...components, component])
  }
  const closeComponent = (name) => {
    set((components) =>
      components.filter((component) => component.cpath !== name)
    )
  }

  return {
    subscribe,
    openComponent,
    closeComponent,
  }
})()
