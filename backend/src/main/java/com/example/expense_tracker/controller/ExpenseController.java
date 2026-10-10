package com.example.expense_tracker.controller;

import com.example.expense_tracker.entity.Expense;
import com.example.expense_tracker.entity.User;
import com.example.expense_tracker.service.ExpenseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ExpenseController {
    private ExpenseService expenseService;

    // quick and dirty inject employee dao (constructor injection)
    @Autowired
    public ExpenseController(ExpenseService theExpenseService){
        expenseService = theExpenseService;
    }

    @GetMapping("/home")
    public List<Expense> getTodayExpense(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        return expenseService.getTodayExpenseById(currentUser.getId());
    }

    @GetMapping("/getSpending")
    public Integer getThisMonthSpending(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
//        System.out.println();
        return expenseService.getThisMonthSpending(currentUser.getId());
    }

    @PostMapping("/addExpense")
    public ResponseEntity<?> addExpense(@RequestBody Expense expense) {                                                                                                                 System.out.println(expense);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        // 2. Attach user to the expense
        expense.setUser(currentUser);

        // 3. Save to database (the returned object will now have its generated id)
        expenseService.saveExpense(expense);

        return ResponseEntity.ok("Expense added successfully");
    }

    // expose "/employees" and return a list of employees
    @GetMapping("/history")
    public ResponseEntity<List<Expense>> getExpenseByDateAndUserId(){

        // 1. Grab the currently authenticated User details from Spring Security
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        // 2. Query only tasks belonging to this specific user's ID
        List<Expense> tasks = expenseService.getExpenseByDateAndUserId(currentUser.getId());

        return ResponseEntity.ok(tasks);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateExpense(
            @PathVariable Integer id,
            @RequestBody Expense updatedExpense) {

        Expense expense = expenseService.updateExpense(id, updatedExpense);

        return ResponseEntity.ok(expense);
    }

    @DeleteMapping("/deleteExpense")
    public  ResponseEntity<?> deleteExpense(@RequestParam("id") Integer id){
        expenseService.deleteExpense(id);
        System.out.println("deleted");
        return ResponseEntity.ok("Deleted successfully");
    }


}
