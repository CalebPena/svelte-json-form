<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		value?: string;
	}

	export let value: string = '';

	const dispatch = createEventDispatcher<{ updateKey: string }>();

	$: dispatch('updateKey', value);
</script>

<input {...$$restProps} type="text" bind:value />
