<script>

    export let name
    export let category
    export let releaseDate
    export let summary
    export let keywords = []
    export let website    



    let shown = false

    const show = (value) => {        
        shown = value     
    }

</script>



<div class="h-20 sm:w-1/4 m-2 p-3 bg-gray-400 border rounded-lg justify-center hover:bg-green-400" >
    <div on:click={() => show(true)} >
        <div class="px-2 py-3" >
            <h5 class="text-lg font-bold text-gray-900 leading-tight">{name}</h5>
            <p>{category}</p>
        </div>
    </div>
    <div class="transition duration-500 ease-in-out fixed top-0 left-0 w-full h-full flex items-center justify-center {shown?"z-10":"opacity-0 pointer-events-none"}" >
        <div class="fixed w-full h-full bg-black opacity-50 top-0 left-0 cursor-pointer" on:click="{() => show(false)}"></div>
        <div class="fixed w-1/2 bg-white rounded-sm shadow-lg">
            <div class="px-8 py-12">
                <h5 class="mt-6 text-lg font-bold text-gray-900 leading-tight" >{name}</h5>
                <span class="">{releaseDate}</span>
                <p class="mt-6 text-gray-700 leading-tight" >{summary}</p>
                <span class="m-6 sm:flex text-center">
                    {#each keywords as keyword}
                        <p class="m-1 p-1 sm:w-1/6 rounded-md bg-gray-600 text-white text-sm" >{keyword}</p>
                    {/each}
                </span>
            </div>
            <div class="px-8 py-12 flex justify-around">
                <a class="px-3 py-1 text-sm uppercase bg-green-500 hover:bg-gray-700 rounded-md"
                    href={website || '#/'}
                    target='_blank'
                    rel='noopener noreferrer'>
                    Open
                </a>
                <a class="px-3 py-1 text-sm text-white uppercase bg-red-500 hover:bg-gray-700 rounded-md" 
                href='#/' on:click={()=>show(false)}>Close</a>
            </div>
        </div>
    </div>

</div>



