<script lang="ts">
	import { getJsonData, type JsonKey } from '$lib/context/context.js';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		jsonKey?: JsonKey;
		defaultValue?: string;
		value?: string;
	}

	export let jsonKey: JsonKey = undefined;
	export let defaultValue: string = '';
	export let value: string = defaultValue;

	const parentData = getJsonData();

	$: parentData.update(value, jsonKey);
</script>

<input {...$$restProps} type="text" bind:value />
