
<div>
<input bind:value={a} type="number">
<select bind:value={operation}>
	{#each operationArr as value }
		<option value={value}>{value}</option>
	
	{/each}

	</select>
	<input bind:value={b}  type="number">
	<b>= {result}</b>
</div>
{a} {operation} {b}
<script>
	import { calc } from './helpers.js'
	let a = 0;
	let b = 0;
	let operationArr = ['+', '-', '*', '/'];
	let operation = operationArr[0];
	let result = 0; 
	
	$: result = calc(a, b, operation);
</script>
<style>

</style>