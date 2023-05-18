<script>
  import { debug } from 'svelte/internal'

  export let works = []

  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }) // .format(Xmas95))

  function formatDateMonthYear(date) {
    if (!date) return undefined
    try {
      let dateFormatted = formatter.format(new Date(date))
      return dateFormatted
    } catch (error) {
      console.log(error)
    }
  }
</script>

<section id="Work" class="px-8 py-12">
  <div>
    <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
      <span>Work</span>
    </h1>
  </div>
  <div class="">
    {#each works as work}
      <div class="m-3 p-6 bg-white border rounded-lg overflow-hidden">
        <a class="dark-link" href={work.website}>
          <img src={work.image} alt="" />
          <h4 class="text-lg font-bold text-yellow-400 leading-tight">
            {work.company}
          </h4>
        </a>
        <div class="font-semibold flex justify-between">
          <p>{work.position}</p>
          {#if work.startDate}
            <p class="text-gray-500 text-sm uppercase">
              <em class="">{formatDateMonthYear(work.startDate)}</em> -
              <em class="">{formatDateMonthYear(work.endDate) || 'current'}</em>
            </p>
          {/if}
        </div>
        <div class="p-3">
          <p class="text-gray-700 text-sm ">{work.summary}</p>
          <p>{work.highlights}</p>
        </div>
        <div class="sm:flex p-3">
          {#each work.stack as tech}
            <p class="m-1 p-1 rounded-md bg-gray-600 text-white text-sm ">
              {tech}
            </p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
