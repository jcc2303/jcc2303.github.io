<script>
  export let languages = []
</script>

<section id="Languages" class="md:px-8 py-12">
  <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
    <span>Languages</span>
  </h1>
  <div class="flex justify-between mt-3">
    {#each languages as lang}
      <div
        class="md:px-8 py-3 mx-3 p-6 bg-white border rounded-lg overflow-hidden w-1/3"
      >
        <h3 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
          {lang.name}
        </h3>
        <p class="">{lang.level} - {lang.fluency}</p>
      </div>
    {/each}
  </div>
</section>
