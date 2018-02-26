package com.mushagi.api.services;

import com.mushagi.api.entity.ToDo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TodoService {
    List<ToDo> getAllToDos();
    List<ToDo> getByID (int id);
    List<ToDo> updateToDo(ToDo newToDo);
    List<ToDo> createToDo(ToDo newToDo);
    List<ToDo> delete(long newToDo);
}
