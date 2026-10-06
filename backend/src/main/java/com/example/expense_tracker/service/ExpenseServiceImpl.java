package com.example.expense_tracker.service;

import com.example.expense_tracker.entity.Expense;
import com.example.expense_tracker.entity.User;
import com.example.expense_tracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ExpenseServiceImpl implements ExpenseService{

    ExpenseRepository expenseRepository;

    @Autowired
    public ExpenseServiceImpl(ExpenseRepository theExpenseRepository){
        expenseRepository = theExpenseRepository;
    }

    @Override
    public List<Expense> getExpenseByDateAndUserId(Integer userId) {
        return expenseRepository.findAllByUserIdOrderByDateDesc(userId);
    }

    @Override
    public Integer getThisMonthSpending(Integer userId) {
        return expenseRepository.getThisMonthSpending(userId);
    }

    @Override
    public void deleteExpense(Integer id) {
        expenseRepository.deleteById(id);
    }

    @Override
    public Expense updateExpense(Integer id, Expense updatedExpense) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        expense.setName(updatedExpense.getName());
        expense.setPrice(updatedExpense.getPrice());
        expense.setCategory(updatedExpense.getCategory());
        expense.setDescription(updatedExpense.getDescription());

        return expenseRepository.save(expense);
    }


    @Override
    public void saveExpense(Expense expense) {
        expenseRepository.save(expense);
    }

    @Override
    public List<Expense> getTodayExpenseById(Integer userId) {
        LocalDate todayDate = LocalDate.now();
        return expenseRepository.findByDateAndUserId(todayDate, userId);
    }


}
