package com.example.expense_tracker.repository;

import com.example.expense_tracker.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<User, Integer> {
    public User findByEmail(String email);
    public Optional<User> findById(Integer userId);
}
