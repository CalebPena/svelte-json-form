<script lang="ts">
	import { getJsonData } from '$lib/context/context.js';
	import type { JsonKey, JsonData, JsonObject } from '$lib/context/context.js';
	import JsonMapItem from './JsonMapItem.svelte';

	export let jsonKey: JsonKey = undefined;

	type JsonObjectItem = {
		key: string;
		value: JsonData;
	};

	let count = 0;
	let itemIds: number[] = [count];
	let items: JsonObjectItem[] = [];

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
		if (items[index] === undefined) {
			items[index] = { key: '', value: value };
		} else {
			items[index].value = value;
		}
		items = items;
	}

	function updateKey(index: number, key: string) {
		if (items[index] === undefined) {
			items[index] = { key: key, value: null };
		} else {
			items[index].key = key;
		}
		items = items;
	}

	function updateKeyGenerator(index: number) {
		return (key: CustomEvent<string>) => {
			updateKey(index, key.detail);
		};
	}

	const parentData = getJsonData();
	function itemsToObject(items: JsonObjectItem[]) {
		const obj: JsonObject = {};

		for (const item of items) {
			obj[item.key] = item.value;
		}

		return obj;
	}
	$: parentData.update(itemsToObject(items), jsonKey);
</script>

{#each itemIds as itemId, index (itemId)}
	<JsonMapItem
		update={(value) => {
			updateItem(index, value);
		}}
	>
		<slot
			name="value"
			{index}
			updateKey={updateKeyGenerator(index)}
			remove={() => {
				removeItem(index);
			}}
		/>
	</JsonMapItem>
{/each}
<slot name="add-button" add={addItem} />
