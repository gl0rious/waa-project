package com.example.project.service;

import com.example.project.domain.Order;
import com.example.project.repository.OrderRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.project.domain.OrderStatus;
import java.time.LocalDateTime;

@Service
public class OrderService {

    @Autowired
    OrderRepository repo;

    public Order save(Order order) {
        order.setTimestamp(LocalDateTime.now());
        return repo.save(order);
    }

    public Order getOrderById(String orderId) {
        return repo.findById(orderId).get();
    }

    public List<Order> getAllOrders() {
        return repo.findAll();
    }

    public void removeOrder(String orderId) {
        repo.deleteById(orderId);
    }

    public void updateOrderStatus(String orderId, OrderStatus status) {
        Order order = repo.findById(orderId).get();
        order.setStatus(status);
        repo.save(order);
    }

    public Order update(Order order) {
        order.setTimestamp(LocalDateTime.now());
        return repo.save(order);
    }

}
