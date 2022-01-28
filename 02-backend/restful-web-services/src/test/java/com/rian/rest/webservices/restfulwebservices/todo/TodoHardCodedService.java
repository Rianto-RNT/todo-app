package com.rian.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "Rian", "Learn Core Backend Development", new Date(), false));
        todos.add(new Todo(++idCounter, "Saprol", "How to Draw", new Date(), false));
        todos.add(new Todo(++idCounter, "Jhon", "Learn Skateboarding", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }
}
