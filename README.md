# Svelte JSON Form

Svelte package for creating an HTML form that outputs JSON.

## How to use

The Svelte JSON components work like the regualar HTML form input elements. Svelte JSON provides a couple extra wrappers for creating JSON.

## API

### JsonForm

Wrapper for a JSON from. Should only have one JSON input as a direct child.
`value`: The value of the JSON in the form

### JsonString

Input for creating a JSON string.
`value`: The value of the input
`defaultValue`: The default value of the input
`jsonKey`: The key of the element in the JSON

### JsonNumber

Input for creating a JSON number.
`value`: The value of the input
`defaultValue`: The default value of the input
`jsonKey`: The key of the element in the JSON

### JsonBoolean

Input for creating a JSON boolean.
`value`: The value of the input
`defaultValue`: The default value of the input
`jsonKey`: The key of the element in the JSON

### JsonNull

Create a field that is always a JSON null
`value`: Always null
`jsonKey`: The key of the element in the JSON

### JsonSelect

Create a select with options for the JSON field. Can be mixed types.
`value`: The value of the select. Must be in options
`jsonKey`: The key of the element in the JSON
`options`: List of options for the select
`defaultValue`: The default value of the select. Must be in options
`optionProps`: Props to be passed into each option element options

### JsonObject

Wrapper for JSON inputs where each input must have the `jsonKey` prop.
`jsonKey`: The key of the element in the JSON

### JsonArray

Wrapper for JSON arrays. Requires 2 named slots:

The `value` prop has the inputs for each element in the array. Provides 2 let props.
`let:index`: The index of the element
`let:remove`: A function that removes the element

The `add-button` prop is a button to add elements to the array. Provides 1 let prop.
`let:add`: A function to add an element

`jsonKey`: The key of the element in the JSON

### JsonMap

Json object where the keys are user selected. Requires 2 named slots:

The `value` prop has the inputs for each element in the map. Provides 3 let props.
`let:index`: The index of the element
`let:remove`: A function that removes the element
`let:updateKey`: A function to be passed into the `JsonMapKey` `on:updateKey` event

The `add-button` prop is a button to add elements to the array. Provides 1 let prop.
`let:add`: A function to add an element

### JsonMapKey

Key used in the JSON map
`value`: Value of the key.
`on:updateKey`: Event that fires then the key changes. Usually used with `let:updateKey` from the `JsonMap` component.

### Types

`JsonDataType`: Any JSON data
`JsonArrayType`: Any JSON array
`JsonObjectType`: Any JSON object
`JsonKeyType`: JSON array or object key

## Example

```
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
				<JsonMapKey on:updateKey={updateKey} />:
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
```

## Contributing

Feel free to create an issue or submit a pull request.
