export interface Expense {
	id?: number;
	name: string;
	price: number;
	category?: string;
	description?: string;
	date?: string;
}

export interface UserSettings {
	monthlyIncome: number;
	savingsGoal: number;
}
