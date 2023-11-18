package com.example.project.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "orders")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order {
    @Id
    private String id;
    private List<OrderItem> items;
    // DATE
    private String customerName;
    private String email;
    private String phone;
    private String street;
    private String city;
    private String zip;
    private String creditCardType;
    private String creditCardNumber;
    private String creditCardExpiry;
    private String validationCode;
    private OrderStatus status;


}
