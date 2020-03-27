<div>
	<Calculator bind:result/>
	<h1>Результат, {result}!</h1>
</div>

<script>
	import Calculator from './Calculator.svelte';
	let result;
	
</script>


<style>
		div {border: 1px solid green; padding:10px; color: red}
</style>