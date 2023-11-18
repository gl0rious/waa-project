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
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(String productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productId));
    }

    @Override
    public Product addProduct(Product product) {
        // Implement validation logic if needed
        return productRepository.save(product);
    }

    @Override
    public void updateProduct(String productId, Product product) {
        // Implement validation logic if needed
        productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productId));
        product.setId(productId);
        productRepository.save(product);
    }

    @Override
    public void removeProduct(String productId) {
        // Implement validation logic if needed
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productId));
        productRepository.delete(product);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(String orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + orderId));
    }

    @Override
    public Order placeOrder(Order order) {
        // Implement validation logic if needed
        return orderRepository.save(order);
    }

    @Override
    public void updateOrderStatus(String orderId, OrderStatus status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + orderId));
        order.setStatus(status);
        orderRepository.save(order);
    }


}