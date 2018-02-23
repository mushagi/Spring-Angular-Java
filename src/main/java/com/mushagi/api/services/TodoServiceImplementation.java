package com.mushagi.api.services;

import com.mushagi.api.entity.ToDo;
import com.mushagi.api.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImplementation implements TodoService{

    @Autowired
    private ToDoRepository toDoRepository;

    @Override
    public List<ToDo> getAllToDos() {
        return toDoRepository.findAll();
    }

    @Override
    public ToDo getByID(int id) {
        return toDoRepository.findById(id);
    }

    @Override
    public ToDo updateToDo(ToDo newToDo) {
        if (toDoRepository.findOne(newToDo.getId()) != null) {
            return toDoRepository.save(newToDo);
        }
        return null;
    }

    @Override
    public List<ToDo> createToDo(ToDo newToDo) {
        toDoRepository.save(newToDo);
        return toDoRepository.findAll();
    }


    @Override
    public List<ToDo> delete(long id) {
        toDoRepository.delete(id);
        return toDoRepository.findAll();
    }
}
