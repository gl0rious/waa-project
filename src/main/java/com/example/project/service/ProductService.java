package com.example.project.service;

import com.example.project.domain.Order;
import com.example.project.domain.OrderStatus;
import com.example.project.domain.Product;
import com.example.project.repository.OrderRepository;
import com.example.project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // impliment exists method
    public boolean exists(String productNumber) {
        return productRepository.existsById(productNumber);
    }

    public Product getProductById(String productNumber) {
        return productRepository.findById(productNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productNumber));
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(String productNumber, Product product) {
        // Implement validation logic if needed
        productRepository.findById(productNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productNumber));
        product.setNumber(productNumber);
        return productRepository.save(product);
    }

    public void removeProduct(String productNumber) {
        // Implement validation logic if needed
        Product product = productRepository.findById(productNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productNumber));
        productRepository.delete(product);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(String orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + orderId));
    }

    public Order placeOrder(Order order) {
        // Implement validation logic if needed
        return orderRepository.save(order);
    }

    public void updateOrderStatus(String orderId, OrderStatus status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + orderId));
        order.setStatus(status);
        orderRepository.save(order);
    }

}