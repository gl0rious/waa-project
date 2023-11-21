package com.example.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.project.domain.Product;
import com.example.project.domain.Review;
import com.example.project.domain.Order;
import com.example.project.domain.OrderItem;
import com.example.project.domain.OrderStatus;

import com.example.project.repository.OrderRepository;
import com.example.project.repository.ProductRepository;
import com.example.project.repository.ReviewRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class BootstrapCommandLineRunner implements CommandLineRunner {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public void run(String... args) throws Exception {
        saveProducts();
        saveReviews();
        saveOrders();
    }

    public void saveProducts() {
        productRepository.save(new Product("1", "Product 1", 10.0, "Description 1", 10));
        productRepository.save(new Product("2", "Product 2", 20.0, "Description 2", 20));
        productRepository.save(new Product("3", "Product 3", 30.0, "Description 3", 30));
        productRepository.save(new Product("4", "Product 4", 40.0, "Description 4", 40));
        productRepository.save(new Product("5", "Product 5", 50.0, "Description 5", 50));
        productRepository.save(new Product("6", "Product 6", 60.0, "Description 6", 60));
        productRepository.save(new Product("7", "Product 7", 70.0, "Description 7", 70));
        productRepository.save(new Product("8", "Product 8", 80.0, "Description 8", 80));
        productRepository.save(new Product("9", "Product 9", 90.0, "Description 9", 90));
        productRepository.save(new Product("10", "Product 10", 100.0, "Description 10", 100));
    }

    public void saveReviews() {
        reviewRepository.save(new Review("1", "Bob", "1", "Comment 1", 5));
        reviewRepository.save(new Review("2", "Alice", "2", "Comment 2", 4));
        reviewRepository.save(new Review("3", "Charlie", "3", "Comment 3", 3));
        reviewRepository.save(new Review("4", "David", "4", "Comment 4", 2));
        reviewRepository.save(new Review("2", "Eve", "5", "Comment 5", 1));
    }

    public void saveOrders() {
        var item = new Order("1",
                Arrays.asList(
                        new OrderItem("1", 1),
                        new OrderItem("2", 2),
                        new OrderItem("3",
                                3)),
                "Bob", "9Jx1H@example.com",
                "123-456-7890", "123 Main St", "New York",
                "10001", "Visa", "1234 5678 9012 3456",
                "01/22");
        orderRepository.save(item);
        for (int i = 0; i < 5; i++) {
            item = new Order(
                    Integer.toString(i + 2),
                    Arrays.asList(
                            new OrderItem("1", 1),
                            new OrderItem("2", 2),
                            new OrderItem("3",
                                    3)),
                    "User " + i, "user" + i + "@example.com",
                    "123-456-7890", "123 Main St", "New York",
                    "10001", "Visa", "1234 5678 9012 3456",
                    "01/22");
            orderRepository.save(item);
        }

    }
}
