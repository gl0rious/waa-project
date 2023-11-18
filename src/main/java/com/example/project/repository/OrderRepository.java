package com.example.project.repository;

import com.example.project.domain.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
    // additional queries if needed
}
