<script lang="ts">
  import { onMount } from 'svelte'
  import { resume } from './stores'
  import { safeLoad } from 'js-yaml'

  import Home from './components/Home.svelte'
  import DinHome from './components/DinHome.svelte'

  const getData = async () => {
    // import.meta.env.BASE_URL + 'data.yml'
    const response = await fetch(`${window.location.origin}/data.yml`, {
      method: 'GET',
    })
    const yamlContent = await response.text()
    const data = safeLoad(yamlContent)
    // Set the YAML data in the store
    resume.set(data)
  }

  onMount(async () => {
    await getData()
  })
</script>

<main>
  <div class="text-align-center antialiased text-gray-900">
    <!-- <Home resume={data} /> -->
    <DinHome />
  </div>
</main>
