<script>
  import { debug } from 'svelte/internal'
  import { writable, get } from 'svelte/store'

  import { searchQuery } from '../stores'

  export let clients = []

  let filteredClients = []
  $: filteredClients = clients.filter((client) => {
    return (
      client.company.toLowerCase().includes($searchQuery.toLowerCase()) ||
      client?.stack?.some((s) =>
        s.toLowerCase().includes($searchQuery.toLowerCase())
      )
    )
  })

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

  const clearSearch = () => {
    $searchQuery = ''
  }
</script>

<section id="Client">
  <div class="md:m-4 md:p-4 bg-white border rounded-lg overflow-hidden">
    <div>
      <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
        <span>Client</span>
      </h1>
    </div>
    <div class="">
      {#each filteredClients as client}
        <div class="m-3 p-6 bg-white border rounded-lg overflow-hidden">
          <a class="dark-link" href={client.website}>
            <img src={client.image} alt="" />
            <h4 class="text-lg font-bold text-yellow-400 leading-tight">
              {client.company}
            </h4>
          </a>
          <div class="font-semibold flex justify-between">
            <p>{client.position}</p>
            {#if client.startDate}
              <p class="text-gray-500 text-sm uppercase">
                <em class="">{formatDateMonthYear(client.startDate)}</em> -
                <em class=""
                  >{formatDateMonthYear(client.endDate) || 'current'}</em
                >
              </p>
            {/if}
          </div>
          <div class="p-3">
            <p class="text-gray-700 text-sm ">{client.summary}</p>
            <p>{client.highlights}</p>
          </div>
          <div class="sm:flex p-3">
            {#each client?.stack as tech}
              <p class="m-1 p-1 rounded-md bg-gray-600 text-white text-sm ">
                {tech}
              </p>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
