package com.mushagi.api.repository;

import com.mushagi.api.entity.ToDo;
import com.mushagi.api.services.TodoService;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDoRepository extends CrudRepository <ToDo, Long>{

    List<ToDo> findAll();
    List<ToDo> findByTitle(String title);
    List<ToDo> findById(long id);
    List<ToDo> delete(long id);
}
