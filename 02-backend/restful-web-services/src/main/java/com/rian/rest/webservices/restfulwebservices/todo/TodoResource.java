package com.rian.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = { "http://localhost:4200"})
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoService;
    private URI uri;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
//        Thread.sleep(5000);
        return todoService.findAll();

    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
//        Thread.sleep(5000);
        return todoService.findById(id);
    }

    // DELETE /users/{username}/todos/{id}
    @DeleteMapping("users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deleteById(id);

        if (todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username,
            @PathVariable long id,
            @RequestBody Todo todo) {

        Todo todoUpdated = todoService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("users/{username}/todos")
    public ResponseEntity<Void> updateTodo(
            @PathVariable String username,
            @RequestBody Todo todo) {

        Todo createdTodo = todoService.save(todo);

        ServletUriComponentsBuilder.fromCurrentRequest()
                                   .path("/{id}")
                                   .buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
