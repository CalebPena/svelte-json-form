<script lang="ts">
	import { getJsonData, setJsonData, type JsonKey } from '$lib/context/context.js';

	export let jsonKey: JsonKey = undefined;

	const parentData = getJsonData();
	const localData = setJsonData({});

	$: parentData.update($localData ?? {}, jsonKey);
</script>

<div class="container">
	<slot />
</div>

<style>
	.container {
		margin-left: 1em;
	}
</style>
