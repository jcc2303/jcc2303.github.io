<script>
  import Project from './Project.svelte'

  export let projects = []

  console.log(projects)
</script>

<section id="Projects">
  <div class="md:m-4 md:p-4 bg-white border rounded-lg overflow-hidden">
    <h1 class="mt-12 text-lg font-bold text-gray-900 leading-tight">
      projects
    </h1>
    <div
      id="projects-wrapper"
      class="flex-wrap sm:flex justify-between m-3 p-6 border rounded-lg overflow-hidden"
    >
      {#each projects as project}
        <Project {...project} />
      {/each}
    </div>
  </div>
</section>
