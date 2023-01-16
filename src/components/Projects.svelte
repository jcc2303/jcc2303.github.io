<script>
  import Project from './Project.svelte'

  export let projects = []

  console.log(projects)
</script>

<section id="Projects" class=" px-8 py-12">
  <h1 class="mt-12 text-lg font-bold text-gray-900 leading-tight">projects</h1>
  <div
    id="projects-wrapper"
    class="flex-wrap sm:flex justify-between m-3 p-6 bg-white border rounded-lg overflow-hidden"
  >
    {#each projects as project}
      <Project {...project} />
    {/each}
  </div>
</section>
