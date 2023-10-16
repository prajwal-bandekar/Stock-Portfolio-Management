package org.jsp.controller;

import org.jsp.dto.ResponseStructure;
import org.jsp.dto.Security;
import org.jsp.service.SecurityService;
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
public class SecurityController {
	@Autowired
	private SecurityService service;

	@PostMapping("/security/{portfolioID}")
	public ResponseEntity<ResponseStructure<Security>> saveSecurity(@RequestBody Security s, @PathVariable int portfolioID){
		return service.saveSecurity(s, portfolioID);
	}
	
	@PutMapping("/security/{portfolioID}")
	public ResponseEntity<ResponseStructure<Security>> updateSecurity(@RequestBody Security s, @PathVariable int portfolioID){
		return service.updateSecurity(s, portfolioID);
	}
	
	@GetMapping("/security/{securityID}")
	public ResponseEntity<ResponseStructure<Security>> findByID(@PathVariable int securityID){
		return service.findById(securityID);
	}

	@DeleteMapping("/security/{securityID}")
	public ResponseEntity<ResponseStructure<String>> deleteSecurity(@PathVariable int securityID){
		return service.deleteSecurity(securityID);
	}
}
