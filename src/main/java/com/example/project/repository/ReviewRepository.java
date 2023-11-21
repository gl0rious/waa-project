package com.example.project.repository;

import com.example.project.domain.Review;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReviewRepository extends MongoRepository<Review, String> {
    public List<Review> findByProductId(String productId);
}
