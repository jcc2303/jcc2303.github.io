<script>
    export let skills = []
    export let languages = []
</script>

<section id="Skills" class="px-8 py-12">
    <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
        <span>Skills</span>
    </h1>
    <div class="">
        {#each skills as skill}
        <div class="px-8 py-3 mx-3 p-6 bg-white border rounded-lg overflow-hidden">
            <h3 class="mt-6 text-lg font-bold text-gray-900 leading-tight">{skill.title}</h3>
            <p class=''>{skill.description}</p>
            <div class="px-8 py-3">
                <ul class="sm:flex">
                    {#each skill.keywords as entry}
                        <li class="m-1 p-1 sm:w-1/6 rounded-md bg-gray-600 text-white text-sm " >
                            <span class="bar-expand percentage90" />
                            <em >{entry}</em>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        {/each}
    </div>
</section>


<section id="Languages" class="px-8 py-12">
    <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">
        <span>Languages</span>
    </h1>
    <div class="flex justify-between mt-3">
        {#each languages as lang}
        <div class="px-8 py-3 mx-3 p-6 bg-white border rounded-lg overflow-hidden w-1/3">
            <h3 class="mt-6 text-lg font-bold text-gray-900 leading-tight">{lang.name}</h3>
            <p class=''>{lang.level} - {lang.fluency}</p>
        </div>
        {/each}
    </div>
</section>
