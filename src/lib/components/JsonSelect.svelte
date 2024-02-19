<script lang="ts">
	import { getJsonData, type JsonKey, type JsonData } from '$lib/context/context.js';
	import type { HTMLInputAttributes, HTMLOptionAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		jsonKey?: JsonKey;
		options: JsonData[];
		defaultValue?: JsonData;
		value?: JsonData;
		optionProps?: HTMLOptionAttributes;
	}

	export let jsonKey: JsonKey = undefined;
	export let options: JsonData[] = [''];
	export let defaultValue: JsonData = '';
	export let value: JsonData = defaultValue;
	export let optionProps: HTMLOptionAttributes = {};

	const parentData = getJsonData();

	$: parentData.update(value, jsonKey);
</script>

<select bind:value {...$$restProps}>
	{#each options as option}
		<option {...optionProps} value={option} selected={option === defaultValue}>{option}</option>
	{/each}
</select>
