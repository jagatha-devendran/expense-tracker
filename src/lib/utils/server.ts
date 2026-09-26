import type { Expense } from "$lib/types/expense";
import { login, signup, logout } from "$lib/services/auth";
import { 
  addExpense, 
  getAllExpenses, 
  getHomeData as fetchHomeData, 
  getDetails as fetchDetails, 
  saveUserSettings 
} from "$lib/services/expenses";

export const handleLogin = login;
export const handleSignup = signup;
export const handleLogout = logout;
export const getAllExpense = getAllExpenses;
export const home = fetchHomeData;
export const getHomeData = fetchHomeData;
export const getDetails = fetchDetails;
export const saveSettings = saveUserSettings;

export async function addData(values: { name: string; price: number | ""; description: string; category: string; date: string; }) {     
  const expense: Expense = {
    name: values.name.trim() || values.category || 'Expense',
    price: typeof values.price === 'number' ? values.price : (parseFloat(values.price as string) || 0),
    category: values.category,
    description: values.description,
    date: values.date
  };

  return addExpense(expense);
}