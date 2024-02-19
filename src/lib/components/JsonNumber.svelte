<script lang="ts">
	import { getJsonData, type JsonKey } from '$lib/context/context.js';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		jsonKey?: JsonKey;
		defaultValue?: number;
		value?: number;
	}

	export let jsonKey: JsonKey = undefined;
	export let defaultValue: number = 0;
	export let value: number = defaultValue;

	let bindedValue = value;

	$: value = bindedValue ?? defaultValue;

	const parentData = getJsonData();

	$: parentData.update(value, jsonKey);
</script>

<input {...$$restProps} type="number" bind:value={bindedValue} />
