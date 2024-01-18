package org.jsp.controller;

import org.jsp.dto.Portfolio;
import org.jsp.dto.ResponseStructure;
import org.jsp.service.PortfolioService;
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
public class PortfolioController {
	@Autowired
	private PortfolioService service;

	@PostMapping("/portfolio/{advisorID}")
	public ResponseEntity<ResponseStructure<Portfolio>> savePortfolio(@RequestBody Portfolio p, @PathVariable int advisorID){
		return service.savePortfolio(p, advisorID);
	}
	
	@PutMapping("/portfolio/{advisorID}")
	public ResponseEntity<ResponseStructure<Portfolio>> updatePortfolio(@RequestBody Portfolio p, @PathVariable int advisorID){
		return service.updatePortfolio(p, advisorID);
	}
	
	@GetMapping("/portfolio/{portfolioID}")
	public ResponseEntity<ResponseStructure<Portfolio>> findByID(@PathVariable int portfolioID){
		return service.findById(portfolioID);
	}

	@DeleteMapping("/portfolio/{portfolioID}")
	public ResponseEntity<ResponseStructure<String>> deletePortfolio(@PathVariable int portfolioID){
		return service.deletePortfolio(portfolioID);
	}
}
