import { login, signup, logout } from '$lib/services/auth';
import {
	addExpense,
	getAllExpenses,
	getHomeData as fetchHomeData,
	getDetails as fetchDetails,
	saveUserSettings,
	addData as addDataService
} from '$lib/services/expenses';

export const handleLogin = login;
export const handleSignup = signup;
export const handleLogout = logout;
export const getAllExpense = getAllExpenses;
export const home = fetchHomeData;
export const getHomeData = fetchHomeData;
export const getDetails = fetchDetails;
export const saveSettings = saveUserSettings;
export const addData = addDataService;
export { addExpense };
