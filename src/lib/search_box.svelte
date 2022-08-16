<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let placeholderDef = '';
	export let idDef = 0;

	let inputValue = '';

	function inputListener() {
		dispatch('message', {
			text: inputValue
		});
	}
</script>

<div class="flex flex-row items-center justify-start p-2">
	<img class="h-5 w-5 " src="search01.svg" alt="" />
	<input
		class="p-2 outline-none"
		type="text"
		name={idDef}
		id={idDef}
		placeholder={placeholderDef}
		bind:value={inputValue}
		on:input={inputListener}
	/>
</div>
