package com.mushagi.api.controller.rest;

import com.mushagi.api.entity.ToDo;
import com.mushagi.api.models.StringResponse;
import com.mushagi.api.repository.ToDoRepository;
import com.mushagi.api.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class ToDoController {

    TodoService todoService;

    @Autowired
    public ToDoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public @ResponseBody List<ToDo> index() {
        return todoService.getAllToDos();
    }
    @GetMapping("/{id}")
    public @ResponseBody List<ToDo> index(@PathVariable int id) {
        return todoService.getByID(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/insert")
    public List<ToDo> createToDo(@RequestBody ToDo toDo) {
        return todoService.createToDo(toDo);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public  List<ToDo> updateToDo(@RequestBody ToDo toDo) {
       return todoService.updateToDo(toDo);
    }

    @DeleteMapping("/delete/{id}")
    public @ResponseBody List<ToDo> delete(@PathVariable long id) {
        return todoService.delete(id);
    }

}
