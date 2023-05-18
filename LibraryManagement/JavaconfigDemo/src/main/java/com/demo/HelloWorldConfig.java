package com.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HelloWorldConfig 
{
@Bean
public HelloWorld hw()
{
	return new HelloWorld();

}
}
