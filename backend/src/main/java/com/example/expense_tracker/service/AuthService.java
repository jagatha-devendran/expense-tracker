package com.example.expense_tracker.service;

import com.example.expense_tracker.entity.User;

public interface AuthService {
    public String login(String email, String password);
    public void registerNewUser(User user);
    public void saveUserSettings(Integer userId, Integer monthlyIncome, Integer saving);

}
