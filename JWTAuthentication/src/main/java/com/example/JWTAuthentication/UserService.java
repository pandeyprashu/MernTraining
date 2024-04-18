package com.example.JWTAuthentication;


import com.example.JWTAuthentication.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private List<User> store = new ArrayList<User>();

    public UserService() {
        store.add(new User(UUID.randomUUID().toString(),"user1", "email@example"));
        store.add(new User(UUID.randomUUID().toString(),"user2", "email@example.com"));
        store.add(new User(UUID.randomUUID().toString(),"user3", "email@example.com"));
    }

    public List<User> getUsers() {
        return this.store;
    }
}
