package com.vishwa.petadopt.model;

import jakarta.persistence.*;

@Entity
public class Pet {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String species;

    public Pet() {
    }
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Pet(Long id, String name, String species) {
        this.id = id;
        this.name = name;
        this.species = species;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }


}
