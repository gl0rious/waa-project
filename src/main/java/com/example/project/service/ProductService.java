package com.example.project.service;

import com.example.project.domain.Order;
import com.example.project.domain.OrderStatus;
import com.example.project.domain.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();

    Product getProductById(String productId);

    Product addProduct(Product product);

    void updateProduct(String productId, Product product);

    void removeProduct(String productId);

    List<Order> getAllOrders();

    Order getOrderById(String orderId);

    Order placeOrder(Order order);

    void updateOrderStatus(String orderId, OrderStatus status);

}

