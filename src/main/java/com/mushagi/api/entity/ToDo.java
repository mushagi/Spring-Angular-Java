package com.mushagi.api.entity;


import lombok.Data;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class ToDo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    private Long id;
    @Getter
    private String body;
    private String title;
    public ToDo() {};
    public ToDo(String title, String body) {
        this.body =  body;
        this.title = title;
    }

    public Long getId() {
        return id;
    }
}
