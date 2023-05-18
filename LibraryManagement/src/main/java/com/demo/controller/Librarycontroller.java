package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Librarymodel;
import com.demo.repository.Libraryrepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Librarycontroller
{
   
	@Autowired
	private Libraryrepository lrepository;
	
	@GetMapping("/view")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Librarymodel> getbooks()
	{
		return this.lrepository.findAll();
	}
	
	@PostMapping("/insert")
	@CrossOrigin(origins="http://localhost:4200")
	public Librarymodel insert(@RequestBody Librarymodel lm)
	{
		return this.lrepository.save(lm);
	}
	
	@PostMapping("/update")
	@CrossOrigin(origins="http://localhost:4200")
	public Librarymodel update(@RequestBody Librarymodel lm1)
	{
		return this.lrepository.save(lm1);
	}
	
	@PostMapping("/delete")
	@CrossOrigin(origins="http://localhost:4200")
	public void delete(@RequestBody Librarymodel id)
	{
		this.lrepository.delete(id);
	}
	
	
	
	
}
