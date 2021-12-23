<script lang="ts">
	import { onMount } from 'svelte';

  import Home from './components/Home.svelte';


	let data = null
	
	const getData = async () => {
		// window.location.href
		const res = await fetch(`${window.location.origin}/data.json`, { method: 'GET' })
		
		const json = await res.json()
		data = json		
	}

	onMount(async () => {
		await getData()
	});

</script>

<main>
  <div class="text-align-center antialiased text-gray-900">
    <Home resume={data} />
  </div>
</main>
