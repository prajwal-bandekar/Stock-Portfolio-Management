package org.jsp.controller;

import org.jsp.dto.Advisor;
import org.jsp.dto.ResponseStructure;
import org.jsp.service.AdvisorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdvisorController {
	
	@Autowired
	private AdvisorService service;

	@PostMapping("/advisor")
	public ResponseEntity<ResponseStructure<Advisor>> saveAdvisor(@RequestBody Advisor a){
		return service.saveAdvisor(a);
	}
	
	@PutMapping("/advisor")
	public ResponseEntity<ResponseStructure<Advisor>> updateAdvisor(@RequestBody Advisor a){
		return service.updateAdvisor(a);
	}
	
	@GetMapping("/advisor/{advisorID}")
	public ResponseEntity<ResponseStructure<Advisor>> findByID(@PathVariable int advisorID){
		return service.findById(advisorID);
	}

	@DeleteMapping("/advisor/{advisorID}")
	public ResponseEntity<ResponseStructure<String>> deleteAdvisor(@PathVariable int advisorID){
		return service.deleteAdvisor(advisorID);
	}
	
	
}
