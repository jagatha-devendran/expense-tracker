package com.example.expense_tracker.service;

import com.example.expense_tracker.entity.User;
import com.example.expense_tracker.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {
    private AuthRepository authRepository;
    private PasswordEncoder passwordEncoder;
    private JwtService jwtService;
    @Autowired
    public AuthServiceImpl(AuthRepository theAuthRepository,
                           PasswordEncoder thePasswordEncoder,
                           JwtService theJwtService){
        authRepository = theAuthRepository;
        passwordEncoder = thePasswordEncoder;
        jwtService = theJwtService;
    }
    @Override
    public String login(String email, String password) {
        User user;
        try{
            user = authRepository.findByEmail(email);
            System.out.println(email);
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }

        boolean passwordCorrect =
                passwordEncoder.matches(
                        password,
                        user.getPassword()
                );
        if (!passwordCorrect) {
            throw new RuntimeException("Invalid email or password");
        }
        return jwtService.generateToken(
                user.getId(),
                user.getEmail()
        );
    }
    @Override
    public void registerNewUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        authRepository.save(user);
    }

    @Override
    public void saveUserSettings(Integer userId, Integer monthlyIncome, Integer saving) {
        Optional<User> optional = authRepository.findById(userId);
        User user = optional.get();
        System.out.println("user: " + user.getMonthlyIncome());
        user.setMonthlyIncome(monthlyIncome);
        user.setSavingsGoal(saving);
        authRepository.save(user);
        System.out.println("saved: " + user.getMonthlyIncome());

    }


}
