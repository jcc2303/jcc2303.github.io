<script>
  import Header from './Header.svelte'
  import Navigation from './Navigation.svelte'
  import Banner from './Banner.svelte'

  import About from './About.svelte'
  import Work from './Work.svelte'
  import Education from './Education.svelte'
  import Skills from './Skills.svelte'
  import Projects from './Projects.svelte'
  import References from './References.svelte'
  import Footer from './Footer.svelte'

  import { resume, techs } from '../stores'

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
</script>

{#if $resume}
  <div id="Home">
    <Header>
      <Navigation />
      <Banner {basics} />
    </Header>
    <div class="bg-gray-100">
      <About />
      <div class="md:px-4">
        <Education {...{ education }} />
        <Skills {skills} {works} node={$techs} />
        <Work {...{ works: clients }} />
        <Work {...{ works }} />
        <Projects {...{ projects }} />
        <Projects projects={portfolio} />
        <References {...{ references }} />
        <!-- {#if techs} <Techs {techs} /> {/if} -->
        <Footer {...{ basics }} />
      </div>
    </div>
  </div>
{/if}
