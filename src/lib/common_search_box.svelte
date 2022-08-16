<script>
	import SearchBox from './search_box.svelte';
	import CommonItem from './common_item.svelte';
	import { browser } from '$app/env';
	import { writable } from 'svelte/store';

	export let componentArray = [];
	let currentAvailableDummyData = [
		{
			itemImg: 'folder.svg',
			itemText: 'Workflow inc. / Website redesign',
			itemType: 'recent'
		},
		{
			itemImg: 'folder.svg',
			itemText: 'Workflow inc. / Website redesign',
			itemType: 'recent'
		},
		{
			itemImg: 'folder.svg',
			itemText: 'Workflow inc. / Website redesign',
			itemType: 'recent'
		},
		{
			itemImg: 'folder.svg',
			itemText: 'Workflow inc. / Website redesign',
			itemType: 'recent'
		},
		{
			itemImg: 'folder.svg',
			itemText: 'Workflow inc. / Website redesign',
			itemType: 'recent'
		},
		{
			itemImg: 'folder.svg',
			itemText: 'Workflow inc. / Website redesign',
			itemType: 'recent'
		}
	];
	let currentSearched = [];
	let recentSearched = new Set();
	let recentSearcheds = [];

	// if (browser) {
	// 	recentSearched = window.localStorage.getItem('recentsearched');
	// }

	// console.log(recentSearched);
	getItem();

	if (recentSearched.size <= 0) {
		recentSearched.add('Workflow inc. / Website redesign');
	}
	// console.log(recentSearched);
	setItem();

	// console.log(recentSearched);

	let searchValue = '';

	function matchKey(ref, pattern, index) {
		//   console.log(pattern);

		let token = pattern.toLowerCase().trim();

		if (token === '') return true;

		if (ref[index].itemText.toLowerCase().includes(token)) {
			return true;
		} else return false;
	}

	function setToArray(set) {
		recentSearcheds = [];
		for (const item of set) {
			recentSearcheds.push(item);
			// console.log(recentSearcheds);
		}
	}

	function arrayToSet(set) {
		for (let i = 0; i < set.length; i++) {
			recentSearched.add(set[i]);
			// console.log(i);
		}
		// console.log(recentSearched);
	}

	function formCurrentSearched(searchValue) {
		currentSearched = [];
		for (let i = 0; i < currentAvailableDummyData.length; i++) {
			let matches = matchKey(currentAvailableDummyData, searchValue, i);
			// console.log(matches);

			if (matches && searchValue != '') {
				currentSearched.push(currentAvailableDummyData[i]);
			}
		}
		if (searchValue != '') {
			recentSearched.add(`${searchValue}`);
			setItem();
			getItem();
		}
	}

	function getItem() {
		if (browser) {
			recentSearcheds = JSON.parse(window.localStorage.getItem('recentsearched'));
			arrayToSet(recentSearcheds);
		}
	}

	function setItem() {
		if (browser) {
			setToArray(recentSearched);
			window.localStorage.setItem('recentsearched', JSON.stringify(recentSearcheds));
		}
	}

	function updateSearchKey(event) {
		searchValue = event.detail.text;
		formCurrentSearched(searchValue);
		console.log(searchValue);
	}

	let timeobj = new Date();
</script>

<div
	class="rounded-xl bg-white w-2/3 min-w-max h-max p-3 pt-2 pl-2 flex flex-col max-w-3xl max-h-96 overflow-auto"
>
	<SearchBox
		placeholderDef={'Search' + '...'}
		idDef={timeobj.getTime().toString().slice(8) + '_' + 'Search'}
		on:message={updateSearchKey}
	/>

	<div class="current">
		<h1 class={'pl-5 text-sm mb-2 font-bold'}>Search results</h1>

		<div class="flex flex-col">
			{#each currentSearched as current, i}
				<CommonItem
					itemImg={current.itemImg}
					itemText={current.itemText}
					itemType={current.itemType}
				>
					<div class="flex" slot="end_item">
						<p class="opacity-40 -ml-1">Jump to...</p>
					</div>
				</CommonItem>
			{/each}
		</div>
	</div>

	<div class="recent">
		<h1 class={'pl-5 text-sm mb-2 font-bold'}>Recent Searches</h1>

		<div class="flex flex-col">
			{#each recentSearcheds as recent, i}
				<CommonItem itemImg="folder.svg" itemText={recent} itemType="recent">
					<div class="flex" slot="end_item">
						<p class="opacity-40 -ml-1">Jump to...</p>
					</div>
				</CommonItem>
			{/each}
		</div>
	</div>

	{#each componentArray as component, i}
		<CommonItem
			itemImg={component.itemImg}
			itemText={component.itemText}
			itemType={component.itemType}
		>
			<div class="flex" slot="end_item">
				<img src="itemend.svg" alt="img" class="h-6 w-6" />
				<p class="opacity-50 -ml-1">
					{component.itemMark}
				</p>
			</div>
		</CommonItem>
	{/each}
</div>
