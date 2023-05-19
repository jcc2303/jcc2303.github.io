<script lang="ts">
  import { onMount } from 'svelte'
  import { resume, techs } from './stores'
  import { safeLoad } from 'js-yaml'

  import Home from './components/Home.svelte'
  import DinHome from './components/DinHome.svelte'

  function isArrayOfStrings(array) {
    return (
      Array.isArray(array) && array.every((item) => typeof item === 'string')
    )
  }

  function convertToNodeStructure(data) {
    if (Array.isArray(data)) {
      return data.map(convertToNodeStructure)
    }

    if (typeof data === 'object') {
      const entries = Object.entries(data)
      if (entries.length === 1 && Array.isArray(entries[0][1])) {
        const [name, children] = entries[0]
        if (isArrayOfStrings(entries)) {
          return { name, children: entries }
        }
        return { name, children: convertToNodeStructure(children).flat() }
      } else {
        return entries.map(([name, children]) => ({
          name,
          children: convertToNodeStructure(children),
        }))
      }
    }

    return { name: data, children: [] }
  }

  // function convertToNodeStructure(data) {
  //   if (Array.isArray(data)) {
  //     return data.map(convertToNodeStructure);
  //   }

  //   if (typeof data === 'object') {
  //     const entries = Object.entries(data);
  //     return entries.map(([name, children]) => ({
  //       name,
  //       children: convertToNodeStructure(children),
  //     }));
  //   }

  //   return { name: data, children: [] };
  // }

  const getData = async (url) => {
    try {
      const response = await fetch(url)
      const yamlContent = await response.text()
      const data = safeLoad(yamlContent)
      return data
    } catch (error) {
      console.error('Error fetching data:', error)
      return null
    }
  }

  onMount(async () => {
    const resumeData = await getData(`${window.location.origin}/data.yml`)
    if (resumeData) {
      resume.set(resumeData)
    }
    const techsData = await getData(`${window.location.origin}/techs.yml`)
    if (techsData) {
      //console.log(techsData);
      //techs.set(techsData)
      console.log('techsData', techsData)
      const transformedData = convertToNodeStructure({ techs: techsData })
      console.log('transformedData', transformedData)

      techs.set(transformedData)
    }
  })
</script>

<main>
  <div class="text-align-center antialiased text-gray-900">
    <!-- <Home resume={data} /> -->
    <DinHome />
  </div>
</main>
