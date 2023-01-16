<script>
  export let references
</script>

<section id="References">
  <div class="px-8 py-12">
    <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
      References
    </h1>
  </div>
  <div class="px-12">
    <div class="">
      {#each references as ref}
        <div
          class="mt-0 p-20 sm:px-40 bg-white border rounded-lg overflow-hidden"
        >
          <blockquote>
            <p class="text-green-700 text-lg    ">{ref.reference}</p>
            <cite class="text-bold">
              {ref.name}
              <span class="block">
                {`${ref.position}, ${ref.company}`}
              </span>
            </cite>
          </blockquote>
        </div>
      {/each}
    </div>
  </div>
</section>
