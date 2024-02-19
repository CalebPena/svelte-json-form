<script lang="ts">
	import { setJsonData, type JsonData } from '$lib/context/context.js';

	export let value: JsonData;

	const localData = setJsonData();

	$: value = $localData ?? {};
</script>

<slot />
