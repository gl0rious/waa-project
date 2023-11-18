package com.example.project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "products")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Product {
    @Id
    private String id;
    private String productNumber;
    private String name;
    private double price;
    private String description;
    private int numberInStock;
    private List<Review> reviews;

    // constructors, getters, and setters
}
