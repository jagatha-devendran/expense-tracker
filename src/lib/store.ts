import { derived, writable } from "svelte/store";
import type { Expense } from "./types/expense";

export const apiData = writable<Expense[]>([]);

export const expenses = derived(apiData, ($apiData) => $apiData || []);


