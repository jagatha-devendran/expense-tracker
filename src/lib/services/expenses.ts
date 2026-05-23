import { db } from "$lib/configs/FirebaseConfig";
import { arrayUnion, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import type { Expense } from "$lib/models/Expense";

function getLocalDateString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function sanitizeExpenses(data: any): Expense[] {
    if (!data || !Array.isArray(data.expense)) return [];
    
    return data.expense.map((item: any) => ({
        ...item,
        // Ensure price is always a number
        price: typeof item.price === 'string' ? parseFloat(item.price) : (item.price || 0)
    }));
}

export async function getTodayExpense(): Promise<Expense[]> {
    try {
        const today = getLocalDateString();
        console.log("Fetching expenses for local date:", today);
        const docRef = doc(db, "expenses", today);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return sanitizeExpenses(docSnap.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error in getTodayExpense:", error);
        return [];
    }
}

export async function addExpense(expense: Expense) {
    const today = getLocalDateString();
    const ref = doc(db, "expenses", today);
    
    try {
        // Ensure we save numbers to Firestore
        const sanitizedExpense = {
            ...expense,
            price: typeof expense.price === 'string' ? parseFloat(expense.price) : expense.price
        };

        await setDoc(ref, {
            expense: arrayUnion(sanitizedExpense)
        }, { merge: true });
        console.log("Expense added successfully");
    } catch (error) {
        console.error("Error adding expense:", error);
    }
}

export async function getAllExpense(): Promise<Map<string, Expense[]>> {
    try {
        console.log("Fetching all expenses...");
        const expensesMap = new Map<string, Expense[]>();
        const querySnapshot = await getDocs(collection(db, "expenses"));
        
        querySnapshot.forEach((doc) => {
            expensesMap.set(doc.id, sanitizeExpenses(doc.data()));
        });
        
        // Sort the map by date (document ID) in descending order (latest first)
        const sortedMap = new Map([...expensesMap.entries()].sort((a, b) => b[0].localeCompare(a[0])));
        
        return sortedMap;
    } catch (error) {
        console.error("Error in getAllExpense:", error);
        return new Map();
    }
}
