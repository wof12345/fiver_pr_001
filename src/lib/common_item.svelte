<script>
	export let itemImg = '';
	export let itemText = '';
	export let itemType = '';
</script>

<div class={itemType === 'recent' ? 'pb-1' : 'pl-1'}>
	<div
		class="flex justify-between custom_color01 xs:flex-col xs:justify-center xs:items-center hover:cursor-pointer p-2 rounded-xl transition duration-500"
	>
		<div class="flex items-center">
			<img class="h-7 w-7" src={itemImg} alt="" />
			<h2 class="pl-2">{itemText}</h2>
		</div>
		<slot name="end_item" />
	</div>
</div>
