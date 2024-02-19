<script lang="ts">
	import JsonObject from '$lib/components/JsonObject.svelte';
	import JsonForm from '$lib/components/JsonForm.svelte';
	import type { JsonData } from '$lib/context/context.js';
	import JsonNumber from '$lib/components/JsonNumber.svelte';
	import JsonString from '$lib/components/JsonString.svelte';
	import JsonArray from '$lib/components/JsonArray.svelte';
	import JsonSelect from '$lib/components/JsonSelect.svelte';
	import JsonBoolean from '$lib/components/JsonBoolean.svelte';
	import JsonNull from '$lib/components/JsonNull.svelte';
	import JsonMap from '$lib/components/JsonMap.svelte';
	import JsonKey from '$lib/components/JsonKey.svelte';

	let value: JsonData = {};
</script>

<JsonForm bind:value>
	<JsonObject>
		<div>
			<label for="hello">Hello</label>
			<JsonNumber jsonKey="hello" id="hello" value={1000} />
		</div>
		<div>
			<label for="world">World</label>
			<JsonString jsonKey="world" id="world" value="hello" />
		</div>
		<div>
			<label for="number">Number</label>
			<JsonSelect jsonKey="number" id="number" value="ahhh" options={['ahhh', 'hello', 0, ':)']} />
		</div>
		<div>
			<label for="bool">Boolean</label>
			<JsonBoolean jsonKey="bool" id="bool" value={true} />
		</div>
		<JsonNull jsonKey="null" />
		<JsonArray jsonKey="arg">
			<div slot="value" let:index let:remove>
				<label for={index + 'hello'}>{index}</label>
				<JsonNumber jsonKey={index} id={index + 'hello'} />
				<button type="button" on:click={remove}>Remove</button>
			</div>
			<div slot="add-button" let:add>
				<button type="button" on:click={add}>Add</button>
			</div>
		</JsonArray>
		<JsonMap jsonKey="i_am_the_map">
			<div slot="value" let:remove let:updateKey>
				<JsonKey on:updateKey={updateKey} />:
				<JsonString value="hello" />
				<button type="button" on:click={remove}>Remove</button>
			</div>
			<div slot="add-button" let:add>
				<button type="button" on:click={add}>Add</button>
			</div>
		</JsonMap>
	</JsonObject>
</JsonForm>

<div>{JSON.stringify(value)}</div>
