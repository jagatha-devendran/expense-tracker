package com.example.expense_tracker.service;

import com.example.expense_tracker.entity.Expense;

import java.util.List;
import java.util.Optional;

public interface ExpenseService {
    public List<Expense> getTodayExpenseById(Integer userId);
    public void saveExpense(Expense expense);
    public List<Expense> getExpenseByDateAndUserId(Integer userId);
    public Integer getThisMonthSpending(Integer userId);
    public void deleteExpense(Integer id);
    public Expense updateExpense(Integer id, Expense updatedExpense);
}
