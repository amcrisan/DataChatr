import { writable } from 'svelte/store';

export const selectedSession = writable('null');
export const selectedDataset = writable('');
export const messageHistory = writable([]);
export const datasetOverview = writable({});