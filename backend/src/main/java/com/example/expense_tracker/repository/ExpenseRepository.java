package com.example.expense_tracker.repository;

import com.example.expense_tracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

    // that's it ... no need to write any code LOL!
    List<Expense> findByDateAndUserId(LocalDate date, Integer userId);
    List<Expense> findAllByUserIdOrderByDateDesc(Integer userId);

    @Query(value = "SELECT COALESCE(SUM(price), 0) FROM expense " +
            "WHERE user_id = :userId " +
            "AND MONTH(date) = MONTH(CURDATE()) " +
            "AND YEAR(date) = YEAR(CURDATE())",
            nativeQuery = true)
    Integer getThisMonthSpending(@Param("userId") Integer userId);

    void deleteById(Integer id);


}

