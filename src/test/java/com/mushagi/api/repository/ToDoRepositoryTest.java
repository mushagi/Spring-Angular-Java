package com.mushagi.api.repository;


import com.mushagi.api.entity.ToDo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ToDoRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ToDoRepository toDoRepository;

    @Test
    public void whenThereAreTodos_thenReturnAListOfToDos() {
        ToDo toDo =  new ToDo("title", "testing to do");
        entityManager.persist(toDo);
        entityManager.flush();

        List<ToDo> toDos = toDoRepository.findAll();
        List<ToDo> expectedTodos = new ArrayList<>();

        expectedTodos.add(toDo);

        assertEquals(toDos, expectedTodos);
    }

    @Test
    public void ifATitleOfAToDoIsRequested_thenGetATitleDoMatchingTheId() {
        ToDo toDo =  new ToDo("title" ,"testing to do");
        entityManager.persist(toDo);
        entityManager.flush();

        ToDo expectedTodo = toDoRepository.findByTitle("title");
        assertEquals(toDo, expectedTodo);
    }

    @Test
    public void addingATodo_thenCheckingIfIthasBeenAdded() {

        entityManager.flush();

        ToDo toDo =  new ToDo("title" ,"testing to do");
        toDoRepository.save(toDo);
        assertEquals(toDoRepository.count(), 1);
    }

    @Test
    public void editingATodo_thenCheckingIfIthasBeenEdited() {

        /*
        ToDo toDo =  new ToDo("title" ,"testing to do");
        entityManager.persist(toDo);
        entityManager.flush();

        System.out.print("=======================|" + toDo.getId() +"|====================");

        toDoRepository.(2, "Hello World!");
        ToDo expectedToDo = toDoRepository.findByTitle("title");
        assertEquals(expectedToDo.getBody(), "Hello");
*/
    }
}