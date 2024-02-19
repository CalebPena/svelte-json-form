<script lang="ts">
	import { setJsonData, type JsonData } from '$lib/context/context.js';
	import type { HTMLFormAttributes } from 'svelte/elements';

	interface $$Props extends HTMLFormAttributes {
		value: JsonData;
	}
	export let value: JsonData;

	const localData = setJsonData();

	$: value = $localData ?? {};
</script>

<form {...$$restProps} on:submit>
	<slot />
</form>
