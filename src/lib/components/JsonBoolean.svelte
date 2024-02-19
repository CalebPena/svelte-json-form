<script lang="ts">
	import { getJsonData, type JsonKey } from '$lib/context/context.js';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		jsonKey?: JsonKey;
		defaultValue?: boolean;
		value?: boolean;
	}

	export let jsonKey: JsonKey = undefined;
	export let defaultValue: boolean = false;
	export let value: boolean = defaultValue;

	const parentData = getJsonData();

	$: parentData.update(value, jsonKey);
</script>

<input {...$$restProps} type="checkbox" bind:checked={value} />
