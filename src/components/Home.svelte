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

  import { generatePDF, generateCoverPDF } from '../utils/jspdf'

  export let resume

  let navigation,
    basics,
    works,
    education,
    skills,
    languages,
    projects,
    portfolio,
    references

  $: if (resume) {
    basics = resume.basics
    works = resume.works
    education = resume.education
    skills = resume.skills
    languages = resume.languages
    projects = resume.projects
    portfolio = resume.portfolio
    references = resume.references
  }

  let wScrollY
  let wHeight //2044

  function scrollByTillscrollTop(ytop) {
    if (wScrollY < ytop) {
      window.scrollBy(0, 5)
      setTimeout(() => scrollByTillscrollTop(ytop), 10)
    }
  }

  function autoScroll() {
    scrollByTillscrollTop(wScrollY + wHeight)
  }

  const generatePdfBinded = function (resume) {
    return () => generatePDF(resume)
  }

  const generateCoverPdfBinded = function (resume) {
    return () => generateCoverPDF(resume)
  }
</script>

<svelte:window bind:scrollY={wScrollY} bind:innerHeight={wHeight} />

{#if resume}
  <div id="Home">
    <Header>
      <Navigation />
      <Banner {basics} {autoScroll} />
    </Header>
    <div class="bg-gray-100">
      <About
        {basics}
        generatePdf={generatePdfBinded(resume)}
        generateCoverPdf={generateCoverPdfBinded(resume)}
      />
      <Education {...{ education }} />
      <Skills {...{ skills, languages }} />
      <Projects {...{ projects }} />
      <Projects projects={portfolio} />
      <References {...{ references }} />
      <Work {...{ works }} />
      <Footer {...{ basics }} />
    </div>
  </div>
{/if}
