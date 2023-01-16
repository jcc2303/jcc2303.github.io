<script lang="ts">

    export let techs = [{
        name: 'JavaScript',
        months: 12,
        works:['Tecla5', 'Daimler', 'SCYTL']
    }]


</script>

<div class="flex flex-wrap">
    {#each techs as tech }
    <div class="flex flex-wrap bg-gray-300 mx-2">
        <span class="px-1">{tech.name}</span>
        <span class="px-1">{tech.months}</span>
        {#each tech.works as work }
        <span class="px-1" >{work}</span>
        {/each}
    </div>
    {/each}
</div>
    <!-- <span class="px-2">{JSON.stringify(techs)}</span> -->