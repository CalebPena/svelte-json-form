import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

export type JsonObject = {
	[key: string]: JsonData;
};

export type JsonArray = JsonData[];

export type JsonData = JsonObject | JsonArray | number | string | boolean | null;

export type JsonKey = number | string | undefined;

type JsonDataStore = {
	subscribe: Writable<JsonData | undefined>['subscribe'];
	update: (value: JsonData, key?: JsonKey) => void;
};

function jsonDataStore(initialValue?: JsonData): JsonDataStore {
	const { subscribe, update: up } = writable<JsonData | undefined>(initialValue);

	function update(value: JsonData, key?: JsonKey) {
		up((prevJson) => {
			if (Array.isArray(prevJson) && typeof key === 'number') {
				prevJson[key] = value;
				return prevJson;
			}

			if (
				typeof prevJson === 'object' &&
				typeof key === 'string' &&
				prevJson !== null &&
				!Array.isArray(prevJson)
			) {
				return { ...prevJson, [key]: value };
			}

			return value;
		});
	}

	return {
		subscribe,
		update
	};
}

export function setJsonData(initialValue?: JsonData) {
	const store = jsonDataStore(initialValue);
	setContext('json-data', store);

	return store;
}

export function getJsonData() {
	return getContext<JsonDataStore>('json-data');
}
