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
  <div
    class={`flex-wrap overscroll-y-none wrap w-full overflow-hidden ${
      expanded ? 'border rounded-lg py-3' : 'm-3'
    } `}
  >
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
      <div class="w-full ml-1 ${expanded ? 'border rounded-lg' : 'ml-4'}">
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
