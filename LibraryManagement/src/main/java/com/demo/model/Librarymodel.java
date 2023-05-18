package com.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Librarymodel 
{
	@Id
	private int id;
	private String name;
	private double price;
	private String status;
	public Librarymodel() {
		super();
		
	}
	public Librarymodel(int id, String name, double price, String status) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Librarymodel [id=" + id + ", name=" + name + ", price=" + price + ", status=" + status + "]";
	}
	
	
	}
	
	


