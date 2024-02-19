<script lang="ts">
	import { getJsonData, type JsonKey } from '$lib/context/context.js';

	export let jsonKey: JsonKey = undefined;
	export let value: null = null;

	const parentData = getJsonData();

	$: parentData.update(value, jsonKey);
</script>
