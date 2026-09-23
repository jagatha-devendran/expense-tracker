import { derived, writable } from "svelte/store";
import type { Expense } from "./models/Expense";


export const apiData = writable<Expense[]>([]);

export const expenses = derived(apiData, ($apiData) => {

    let expenseList: Expense[]  = [];

    $apiData.forEach(expense => {
      expenseList.push(expense);
    });

    return expenseList;
});

