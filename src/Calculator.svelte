
<div>
{#each values as value, i}
	{#if i > 0}
 <Operations bind:value={operationArr[i-1]} />
	{/if}
	<input bind:value={value} type="number">
{/each}

	<b>= {result}</b>
	
		<button on:click={add}>
		 Add value
	</button>
</div>

<script>
	
	import Operations from './Operations.svelte';
	import { calculate } from './helpers.js';
	
		let values = [0];
		let operationArr = [];
		let result = 0; 
	function add() {
		values = [...values, 0]
 	}
	
	$: result = calculate(values, operationArr );
		export { result }
</script>
<style>
	div {border: 1px solid red; padding:10px; color: red}
</style> 