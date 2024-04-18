package com.example.JWTAuthentication.controller;

import com.example.JWTAuthentication.UserService;
import com.example.JWTAuthentication.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User>  getUser(){

        return userService.getUsers();
    }
}
