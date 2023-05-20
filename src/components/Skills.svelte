<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  // Define the two components
  import TechTree from './TechTree.svelte'
  import Techs from './Techs.svelte'

  export let skills = []

  export let node = { children: [] }
  export let works = []

  // Store to keep track of the selected component
  const selectedComponent = writable('definition')

  const selectDefinition = () => {
    selectedComponent.set('definition')
  }

  const selectStats = () => {
    selectedComponent.set('stats')
  }

  // Fetch the data or perform any necessary initialization
  onMount(() => {
    // Fetch data or perform initialization here
  })
</script>

<section id="Skills">
  <div class="md:m-4 md:p-4 bg-white border rounded-lg overflow-hidden">
    <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
      <span>Skills</span>
    </h1>

    <div class="flex items-center justify-center space-x-4">
      <button
        class={`px-4 py-2 rounded-lg ${
          $selectedComponent === 'definition'
            ? 'bg-yellow-600 text-white'
            : 'bg-gray-500 text-white'
        } `}
        on:click={selectDefinition}
      >
        Navigate
      </button>
      <button
        class={`px-4 py-2 rounded-lg ${
          $selectedComponent === 'stats'
            ? 'bg-yellow-600 text-white'
            : 'bg-gray-500 text-white'
        } `}
        on:click={selectStats}
      >
        Stats
      </button>
    </div>

    {#if $selectedComponent === 'definition'}
      <TechTree {node} />
    {:else if $selectedComponent === 'stats'}
      <Techs {works} />
    {/if}
  </div>
</section>

<style>
  /* Add your custom styles here */
</style>
