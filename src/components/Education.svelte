

<script>
    import {Datetime} from '../utils/datetime';
    
    export let education

</script>



<section id="Education">
    <div class="px-8 py-12">
        <h1 class="mt-6 text-lg font-bold text-gray-900 leading-tight">Education</h1>
    </div>
    <div class="px-8">
        {#each education as entry}

        <div class="mx-3 p-6 bg-white border rounded-lg overflow-hidden">
            <h3 class="mt-6 text-lg font-bold text-gray-900 leading-tight" >{entry.institution}</h3>
            <p class=''>
                {entry.area}
                <span> &bull; </span>
                <span class=''>{entry.summary}</span>
                <span> &bull; </span>
                <em class=''>{Datetime.getDisplayFromDate(entry.startDate)} - {Datetime.getDisplayFromDate(entry.endDate)}</em>
            </p>
        </div>
        {/each}
    </div>
</section>
