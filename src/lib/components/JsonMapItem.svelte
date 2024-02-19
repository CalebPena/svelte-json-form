<script lang="ts">
	import { setJsonData, type JsonData } from '$lib/context/context.js';

	export let update: (value: JsonData) => void;

	const localData = setJsonData();

	$: update($localData as JsonData);
</script>

<slot />
