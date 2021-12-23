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

    import {generatePDF, generateCoverPDF} from  '../utils/jspdf'

    export let resume

    let navigation, basics, works, education, skills, languages, projects, portfolio, references

    $: if(resume){
        basics = resume.basics
        works = resume.works
        education = resume.education
        skills = resume.skills
        languages = resume.languages
        projects = resume.projects
        portfolio = resume.portfolio
        references = resume.references
        
        console.log(portfolio);
        
    }

    const generatePdfBinded =  function () {
        let myresume = resume
        return () => generatePDF(myresume)
    }

    const generateCoverPdfBinded =  function () {
        let myresume = resume
        return () => generateCoverPDF(myresume)
    }        

</script>

{#if resume}
<div id="Home">
    <Header  >
        <Navigation />
        {#if basics}<Banner bind:basics={basics}/>{/if}
    </Header>
    <div>
        <About {...{basics, generatePdf: generatePdfBinded(), generateCoverPdf: generateCoverPdfBinded()}} />       
        <Education {...{education}} />
        <Skills {...{skills, languages }} />
        <Projects {...{projects}} />
        <Projects bind:projects={portfolio} />
        <References {...{references}} />
        <Work {...{works}} />
        <Footer {...{basics}} />
    </div>
</div>
{/if}