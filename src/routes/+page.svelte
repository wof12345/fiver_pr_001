<script>
	import CommonBox from '../lib/common_search_box.svelte';
</script>

<div
	class="font_def bg-[url('bg01.jpg')] bg-cover h-screen w-screen flex items-center justify-center "
>
	<CommonBox
		componentArray={[
			{ itemImg: 'file-plus.svg', itemText: 'Add new file...', itemType: 'item', itemMark: 'N' },
			{
				itemImg: 'folder-plus.svg',
				itemText: 'Add new folder...',
				itemType: 'item',
				itemMark: 'F'
			},
			{ itemImg: 'hash.svg', itemText: 'Add hashtag...', itemType: 'item', itemMark: 'H' },
			{ itemImg: 'label.svg', itemText: 'Add label...', itemType: 'item', itemMark: 'L' }
		]}
	/>
</div>
