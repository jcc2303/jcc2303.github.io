<script>
  import {
    searchQuery as querySearch,
    resume,
    techs,
    componentVisibility,
  } from '../stores'
  import { createEventDispatcher } from 'svelte'
  import Skills from './Skills.svelte'

  let searchQuery = ''
  let isModalOpen = false
  const dispatch = createEventDispatcher()
  let modalContainer // Declare the reference variable

  const components = [
    { name: 'Education', key: 'showEducation' },
    // { name: 'Skills', key: 'showSkills' },
    { name: 'Work', key: 'showWork' },
    { name: 'Client', key: 'showClient' },
    { name: 'Projects', key: 'showProjects' },
    { name: 'References', key: 'showReferences' },
  ]

  function toggleComponentVisibility(component) {
    componentVisibility.update((config) => ({
      ...config,
      [component]: !config[component],
    }))
  }

  function openSearch() {
    searchQuery = ''
    isModalOpen = true
  }

  function addSearch() {
    querySearch.set(
      $querySearch
        ? $querySearch.split(',').concat(searchQuery.trim()).join(',')
        : searchQuery.trim()
    )
    searchQuery = ''
  }

  function handleCloseModal() {
    isModalOpen = false
  }

  function handleOutsideClick(event) {
    if (event.target === modalContainer) {
      handleCloseModal()
    }
  }

  function handleRemoveWord(index) {
    querySearch.set(
      $querySearch
        .split(',')
        .filter((_, i) => i !== index)
        .join(',')
    )

    searchQuery = ''
  }
</script>

<section class="container mx-auto p-4">
  <div class="items-center justify-center mb-4 flex justify-between">
    <button
      class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
      on:click={openSearch}
    >
      Show/Search
    </button>
    {#if $querySearch}
      <div class="flex flex-wrap space-x-2">
        {#each $querySearch.split(',') as word, index}
          <div
            class="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <span>{word}</span>
            <button
              class="text-white hover:text-gray-200"
              on:click={() => handleRemoveWord(index)}
            >
              &#10006;
            </button>
          </div>
        {/each}
      </div>
    {:else}
      <div>Activate Sections or Filter</div>
    {/if}
  </div>

  {#if isModalOpen}
    <div
      bind:this={modalContainer}
      class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
      on:click={handleOutsideClick}
    >
      <div
        class="bg-white rounded-lg shadow-lg p-6 m-10 w-full h-5/6 overflow-auto relative"
      >
        <button
          class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800"
          on:click={handleCloseModal}
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="flex justify-around w-full">
          <h2 class="text-xl mb-7">Search / Filter</h2>
        </div>
        <div class="flex justify-around w-full">
          {#each components as { name, key }}
            <div class="">
              <label class="flex items-center">
                <span>{name}:</span>
                <input
                  type="checkbox"
                  checked={$componentVisibility[key]}
                  on:change={() => toggleComponentVisibility(key)}
                  class="ml-2 form-checkbox h-5 w-5 text-yellow-600 transition duration-150 ease-in-out"
                />
              </label>
            </div>
          {/each}
        </div>
        <div class="flex justify-end mt-4">
          {#if $querySearch}
            <div class="flex flex-wrap space-x-2">
              {#each $querySearch.split(',') as word, index}
                <div
                  class="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
                >
                  <span>{word}</span>
                  <button
                    class="text-white hover:text-gray-200"
                    on:click={() => handleRemoveWord(index)}
                  >
                    &#10006;
                  </button>
                </div>
              {/each}
            </div>
          {/if}

          <div class="relative">
            <input
              type="text"
              class="border border-gray-300 rounded-md px-4 py-2 ml-4  focus:ring-2 focus:ring-yellow-500 hover:border-gray-500 focus:border-gray-500 focus:outline-none"
              placeholder="git, javascript       [Stack filter]"
              title="max 3 terms for good result"
              bind:value={searchQuery}
              on:keydown={(event) => {
                if (event.key === 'Enter') addSearch()
              }}
            />
            <div
              class="absolute right-0 top-0 -mt-10 bg-gray-100 px-2 py-1 text-sm rounded-lg shadow hidden"
            >
              Hint: max 3 terms for good result
            </div>
            <button
              class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              on:click={addSearch}
            >
              Add
            </button>
          </div>
        </div>

        <div class="max-h-full">
          <!-- Add your large content here -->
          <Skills skills={$resume.skills} works={$resume.works} node={$techs} />
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  /* Show hint on input hover */
  .relative:hover > .absolute {
    display: block;
  }
</style>
