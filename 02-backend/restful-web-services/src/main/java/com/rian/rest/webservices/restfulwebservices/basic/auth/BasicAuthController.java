package com.rian.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {

    @GetMapping(path="/basicauth")
    public AuthBean helloWorldBean() {

        return new AuthBean("You are authenticated");
    }
}
