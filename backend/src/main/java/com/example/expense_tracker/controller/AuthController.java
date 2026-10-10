package com.example.expense_tracker.controller;

import com.example.expense_tracker.dto.LoginRequest;
import com.example.expense_tracker.entity.Expense;
import com.example.expense_tracker.entity.User;
import com.example.expense_tracker.service.AuthService;
import com.example.expense_tracker.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.swing.undo.AbstractUndoableEdit;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class AuthController {
    private final AuthService authService;
    private final AuthRepository authRepository;

    @Autowired
    public AuthController(AuthService theAuthService, AuthRepository theAuthRepository){
        this.authService = theAuthService;
        this.authRepository = theAuthRepository;
    }

//    @PostMapping("/auth/login")
//    public String login(@RequestBody LoginRequest loginRequest){
//        return authService.login(loginRequest.getEmail(), loginRequest.getPassword());
//    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        String token = authService.login(request.getEmail(), request.getPassword());

        // Create HttpOnly Cookie
        ResponseCookie cookie = ResponseCookie.from("jwt_token", token)
                .httpOnly(true)                      // Blocks JS from reading it (XSS protection)
                .secure(false)                       // Set to true in production (HTTPS)
                .path("/")                           // Available for all endpoints
                .maxAge(24 * 60 * 60)                // 1 day expiration
                .sameSite("Lax")                     // Protects against CSRF
                .build();

        User currentUser = authRepository.findByEmail(request.getEmail());
        Map<String, Object> response = new HashMap<>();
        response.put("username", currentUser.getName());
        response.put("email", currentUser.getEmail());
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(response);
    }

    @PostMapping("/auth/signup")
    public void register(@RequestBody User user) {
        authService.registerNewUser(user);
    }

    @PostMapping("/auth/logout")
    public ResponseEntity<?> logout() {
        ResponseCookie cookie = ResponseCookie.from("jwt_token", "")
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(0) // Immediately expires the cookie
                .sameSite("Lax")
                .build();

        System.out.println("Logged out successfully");

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body("Logged out successfully");
    }

    @GetMapping("/getDetails")
    public ResponseEntity<?> getDetails(){
        Map<String, Object> response = new HashMap<>();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        response.put("income", currentUser.getMonthlyIncome());
        response.put("savings", currentUser.getSavingsGoal());
        return ResponseEntity.ok(response);

    }

    @PostMapping("/saveSettings")
    public ResponseEntity<?> saveSettings(@RequestBody  Map<String, Integer> payload) {
        Integer income = (Integer) payload.get("monthly_income");
        Integer savingsGoal = (Integer) payload.get("savings_goal");
        System.out.println(income+" "+savingsGoal);

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        authService.saveUserSettings(currentUser.getId(), income, savingsGoal);

        return ResponseEntity.ok("Processed dynamic data for: " + income +" "+ savingsGoal);

    }
}
