<script>
  export let basics = {}

  export let generatePdf

  export let generateCoverPdf

  let { picture, name, summary = [], location = {}, phone, email } = basics
</script>

<section id="About" class="bg-gray-500 text-white full-width">
  <div class="sm:flex">
    <div class="px-8 py-12">
      <img
        name="meimage"
        class="w-48 rounded-lg shadow-xl"
        src={picture}
        alt={name}
      />
      <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
        Let's enjoy together
      </h1>
    </div>
    <div class="px-8 py-12">
      <h2 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
        About Me
      </h2>
      {#each summary as s}
        <p class="mt-6 text-gray-900">{s}</p>
      {/each}
      <div class="px-8 py-12 sm:flex">
        <div class="">
          <h2 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
            Contact Details
          </h2>
          <p class="">
            <!-- <span>{location.address}</span>
                        <br/> -->
            <span class="text-yellow-300">{location.city}</span>
            <span class="mx-3 text-yellow-300">{location.countryCode}</span>
            <br />
            <a class="text-yellow-800" href={`skype:${phone}`}>
              <span>{phone}</span>
            </a>
            <br />
            <a class="text-yellow-900" href={`mailto:${email}`}>
              <span>{email}</span>
            </a>
          </p>
        </div>
        <div class="px-8 py-12">
          <a
            href="/#"
            class="flex inline-block px-4 py-2 rounded-lg bg-yellow-600 text-white uppercase"
            on:click={generatePdf}
          >
            <!-- <DownloadSvg class="h-6 w-6 fill-current mx-2 " ></DownloadSvg> -->
            Resume
          </a>
        </div>
        <div class="px-8 py-12">
          <a
            href="/#"
            class="flex inline-block px-4 py-2 rounded-lg bg-yellow-600 text-white uppercase"
            on:click={generateCoverPdf}
          >
            <!-- <DownloadSvg class="h-6 w-6 fill-current mx-2 " ></DownloadSvg> -->
            Cover letter
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
