package com.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {

	public static void main(String[] args) 
	{
		ApplicationContext con = new AnnotationConfigApplicationContext(HelloWorldConfig.class);
    
		HelloWorld h1 = con.getBean(HelloWorld.class);
		
		h1.setMessage("Hello");
		System.out.println(h1.getMessage());
	}

}
