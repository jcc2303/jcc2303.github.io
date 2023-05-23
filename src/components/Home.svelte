<script>
  import Header from './Header.svelte'
  import Navigation from './Navigation.svelte'
  import Banner from './Banner.svelte'

  import About from './About.svelte'
  import Work from './Work.svelte'
  import Client from './Client.svelte'
  import Education from './Education.svelte'
  import Skills from './Skills.svelte'
  import Projects from './Projects.svelte'
  import References from './References.svelte'
  import Footer from './Footer.svelte'

  import { resume, techs, componentVisibility } from '../stores'
  import Search from './Search.svelte'

  let navigation,
    basics,
    works,
    education,
    skills,
    languages,
    projects,
    portfolio,
    references,
    clients

  $: if ($resume) {
    basics = $resume.basics
    works = $resume.works
    education = $resume.education
    skills = $resume.skills
    languages = $resume.languages
    projects = $resume.projects
    portfolio = $resume.portfolio
    references = $resume.references
    clients = $resume.clients
  }

  // Function to toggle the visibility of a component
  function toggleComponentVisibility(component) {
    componentVisibility.update((prevVisibility) => ({
      ...prevVisibility,
      [component]: !prevVisibility[component],
    }))
  }
</script>

{#if $resume}
  <div id="Home">
    <Header>
      <Navigation />
      <Banner {basics} />
    </Header>
    <div class="bg-gray-100 ">
      <About />
      <Search />
      <div class="md:px-4 w-full items-center">
        {#if $componentVisibility.showEducation}
          <!-- Education component here -->
          <Education {...{ education }} />
        {/if}
        <!-- {#if $componentVisibility.showSkills}
        <Skills {skills} {works} node={$techs} />
        {/if} -->

        {#if $componentVisibility.showWork}
          <!-- Work component here -->
          <Work {...{ works }} />
        {/if}

        {#if $componentVisibility.showClient}
          <!-- Client component here -->
          <Client {...{ clients }} />
        {/if}

        {#if $componentVisibility.showProjects}
          <!-- Projects component here -->
          <Projects {...{ projects }} />
          <Projects projects={portfolio} />
        {/if}

        {#if $componentVisibility.showReferences}
          <!-- References component here -->
          <References {...{ references }} />
        {/if}
        <!-- {#if techs} <Techs {techs} /> {/if} -->
        <Footer {...{ basics }} />
      </div>
    </div>
  </div>
{/if}
