<script>
  export let basics = {}

  export let autoScroll
  let name

  $: name = basics.name
</script>

<div class="px-8 py-48 text-center">
  <button class="border rounded-2xl p-5 bg-gray-100 bg-opacity-50 ring-1 ring-red-100 hover:bg-gray-500" type="button" on:click={autoScroll}>
    <h1 class="mt-6 text-6xl font-bold font-sans text-yellow-700 leading-10 text-shadow" >
      {name}
    </h1>
  </button>
  <!-- <SocialMedia profiles={basics.profiles}/> -->
  <slot/>
</div>
