import type { Expense } from '$lib/types/expense';
import { apiData } from '$lib/store';
import { apiFetch } from './api';

export async function addExpense(expense: Expense) {
	return apiFetch('/addExpense', {
		method: 'POST',
		data: expense
	});
}

export async function getAllExpenses() {
	const data = await apiFetch<Expense[]>('/history', {
		method: 'GET'
	});
	if (Array.isArray(data)) {
		apiData.set(data);
		console.log(data)
	}
	return data;
}

export async function getHomeData() {
	try {
		const data = await apiFetch<Expense[]>('/home', {
			method: 'GET'
		});
		if (Array.isArray(data)) {
			apiData.set(data);
		}
		return data;
	} catch (error) {
		console.error('Failed to load home data:', error);
		return [];
	}
}

export async function getThisMonthSpending() {
	try{
		const data = await apiFetch<number>('/getSpending',{
			method: 'GET'
		})
		console.log(data)
		return data
	} catch(error){
		console.error("No data: ", error)
	}
	
}

export interface UserDetails {
	income?: number;
	savings?: number;
}

export async function getDetails() {
	try {
		const userDetails = await apiFetch<UserDetails>('/getDetails', {
			method: 'GET'
		});
		console.log(userDetails)
		console.log(userDetails.income)
		console.log(userDetails.savings)
		return userDetails
		
	} catch (error) {
		console.error('Failed to load user details:', error);
		return null;
	}
}

export async function saveUserSettings(monthlyIncome: number, savingsGoal: number) {
	return apiFetch('/saveSettings', {
		method: 'POST',
		data: {
			monthly_income: monthlyIncome,
			savings_goal: savingsGoal
		}
	});
}

export interface AddDataParams {
	name: string;
	price: number | string;
	description: string;
	category: string;
	date: string;
}

export async function addData(values: AddDataParams) {
	const expense: Expense = {
		name: values.name.trim() || values.category || 'Expense',
		price:
			typeof values.price === 'number' ? values.price : parseFloat(values.price as string) || 0,
		category: values.category,
		description: values.description,
		date: values.date
	};

	return addExpense(expense);
}

export async function updateData(id: number | undefined, data: Expense) {
    return await apiFetch(`/update/${id}`, {
        method: 'PUT',
        data
    });
}

export async function deleteById(id:number) {
	const data = await apiFetch(`/deleteExpense?id=${id}`, {
		method: 'DELETE',
	});
	console.log(data)
}
