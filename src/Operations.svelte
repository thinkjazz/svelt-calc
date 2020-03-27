<select bind:value={value}>
	{#each operationArr as value }
		<option {value}>{value}</option>
		{/each}
	</select>

<script>
		const operationArr = ['+', '-', '*', '/'];
		export let value = operationArr[0]
</script>