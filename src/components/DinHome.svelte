<script>
  import Header from './Header.svelte'
  import Navigation from './Navigation.svelte'
  import { resume } from '../stores'
  import Banner from './Banner.svelte'

  import { componentService, loads } from '../stores'

  // Open a component
  const openComponent = ({ cpath, component, data }) => {
    componentService.openComponent({ cpath, component, data })
  }

  // Close a component
  const closeComponent = (cpath) => {
    componentService.closeComponent(cpath)
  }

  // Subscribe to the component store
  // const components = $componentService;
  let components = []

  async function importComponent(componentPath, data) {
    const componentModule = await import(`${componentPath}.svelte`)
    return { cpath: componentPath, component: componentModule.default, data }
  }

  let config
  $: if ($resume) {
    const {
      basics,
      education,
      skills,
      languages,
      projects,
      portfolio,
      references,
      works,
      clients,
    } = $resume

    config = [
      //   { cpath: './Banner', data: { basics , autoScroll} },
      {
        cpath: './About',
        data: {
          basics,
          //   generatePdf: generatePdfBinded(resume),
          //   generateCoverPdf: generateCoverPdfBinded(resume)
        },
      },
      { cpath: './Education', data: { education } },
      { cpath: './Skills', data: { skills, languages } },
      { cpath: './Projects', data: { projects: portfolio } },
      { cpath: './Projects', data: { projects } },
      { cpath: './References', data: { references } },
      { cpath: './Techs', data: { works } },
      { cpath: './Work', data: { clients } },
      { cpath: './Work', data: { works } },
      { cpath: './Footer', data: { basics } },
    ]
  }

  async function configComponents() {
    const promised = config.map(
      async ({ cpath, data }) => await importComponent(cpath, data)
    )
    components = await Promise.all(promised)
    loads.set(components)
    components.map((c) => openComponent(c))
  }

  $: if (config) configComponents()
</script>

{#if $resume}
  <div id="Home">
    <Header>
      <Navigation />
      <Banner basics={$resume.basics} />
    </Header>

    <div class="bg-gray-100">
      {#each components as { component, data }}
        <svelte:component this={component} {...data} />
      {/each}
    </div>
  </div>
{/if}
