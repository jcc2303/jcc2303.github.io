<script>
  let links = {
    home: 'Home',
    about: 'About',
    education: 'Education',
    skill: 'Skills',
    projects: 'Projects',
    references: 'References',
    work: 'Work',
  }
  let olinks

  $: if (links) {
    olinks = Object.keys(links)
  }
  let opened
</script>

<nav class="fixed right-0 left-0 bg-yellow-900 text-white">
  <!-- vertical nav -->
  <div class="sm:hidden">
    <div class=" p-2 flex justify-between">
      <img class="object-contain h-6" src="logo.svg" alt="mylogo" />
      <button
        on:click={() => (opened = !opened)}
        type="button"
        class="text-gray-500 hover:text-white focus:text-white"
      >
        {#if opened}
          <p>EXIT</p>
           :
        {:else}
          <p>OPEN</p>
        {/if}
      </button>
    </div>
    <ul
      class={opened ? 'block inline-block px-4 text-font-semibold' : 'hidden'}
    >
      {#each olinks as olink}
        <li>
          <a
            href={'#' + links[olink]}
            class="px-3 py-1 text-sm uppercase hover:bg-gray-700 rounded-md w-full"
            alt={links[olink]}>{links[olink]}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <!-- horizontal nav -->
  <ul
    class="hidden flex items-center px-4 sm:flex justify-between sm:justify-center"
  >
    {#each olinks as olink}
      <a
        href={'#' + links[olink]}
        class="px-3 py-1 text-sm uppercase hover:bg-gray-700 rounded-md w-full"
        alt={links[olink]}>{links[olink]}</a
      >
    {/each}
  </ul>
</nav>
