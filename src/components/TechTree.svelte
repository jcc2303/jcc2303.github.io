<script>
  import { searchQuery } from '../stores'

  export let node
  export let level = 0

  $: console.log(node)

  let expanded = false
  $: expanded = !!(level == 0)

  const toggleExpanded = () => {
    expanded = !expanded
  }

  const scrollToWorks = () => {
    const skillsSection = document.getElementById('Work')
    skillsSection.scrollIntoView({ behavior: 'smooth' })
  }

  const addSearch = () => {
    searchQuery.set(node.name)
    scrollToWorks()
  }
</script>

{#if node.children.length}
  <div class="pl-1 py-3 mx-3 px-2 bg-white border rounded-lg overflow-hidden">
    <div class="flex items-center">
      <span class="cursor-pointer" on:click={toggleExpanded}>
        {#if level != 0}
          <span class="cursor-pointer text-gray-500 ">
            {expanded ? '▼' : '►'}
            {node.name}
          </span>
        {/if}
      </span>
    </div>
    {#if expanded && node.children.length > 0}
      <div class="ml-4">
        {#each node.children as child}
          <svelte:self node={child} level={level + 1} />
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <span class="items-center pl-1">
    <span class="cursor-pointer" on:click={toggleExpanded}>
      <span
        class="cursor-pointer m-1 py-1 px-2 sm:w-1/6 rounded-md bg-gray-600 text-white text-sm"
        on:click={addSearch}
      >
        {node.name}
      </span>
    </span>
  </span>
{/if}

<!-- <div class="">
    {#each skills as skill}
      <div
        class="px-8 py-3 mx-3 p-6 bg-white border rounded-lg overflow-hidden"
      >
        <h3 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
          {skill.title}
        </h3>
        <p class="">{skill.description}</p>
        <div class="px-8 py-3">
          <ul class="sm:flex">
            {#each skill.keywords as entry}
              <li
                class="m-1 p-1 sm:w-1/6 rounded-md bg-gray-600 text-white text-sm "
              >
                <span class="bar-expand percentage90" />
                <em>{entry}</em>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div> -->
