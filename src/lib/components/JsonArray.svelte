<script lang="ts">
	import { getJsonData } from '$lib/context/context.js';
	import type { JsonKey, JsonArray, JsonData } from '$lib/context/context.js';
	import JsonArrayItem from '$lib/components/JsonArrayItem.svelte';

	export let jsonKey: JsonKey = undefined;

	let count = 0;
	let itemIds: number[] = [count];
	let items: JsonArray = [];

	function addItem() {
		count++;
		itemIds.push(count);
		itemIds = itemIds;
	}

	function removeItem(index: number) {
		itemIds.splice(index, 1);
		itemIds = itemIds;
		items.length = itemIds.length;
	}

	function updateItem(index: number, value: JsonData) {
		items[index] = value;
		items = items;
	}

	const parentData = getJsonData();
	$: parentData.update(items, jsonKey);
</script>

{#each itemIds as itemId, index (itemId)}
	<JsonArrayItem
		update={(value) => {
			updateItem(index, value);
		}}
	>
		<slot
			name="value"
			{index}
			remove={() => {
				removeItem(index);
			}}
		/>
	</JsonArrayItem>
{/each}
<slot name="add-button" add={addItem} />
