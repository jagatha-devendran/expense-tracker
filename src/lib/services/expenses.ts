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

export async function getDetails() {
  try {
    return await apiFetch('/getDetails', {
      method: 'GET'
    });
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
