package com.rian.rest.webservices.restfulwebservices.basic.auth;

public class AuthBean {


    private String message;

    public AuthBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message =  message;
    }

    @Override
    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }
}
