<script>
  export let basics = {}
  let name

  $: name = basics.name
</script>

<div class="px-8 py-48 text-center">
  <h1
    class="mt-6 text-6xl font-bold font-sans text-yellow-700 leading-10 text-shadow"
  >
    {name}
  </h1>
  <!-- <SocialMedia profiles={basics.profiles}/> -->
</div>
