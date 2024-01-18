package org.jsp.service;

import java.util.Optional;


import org.jsp.dao.AdvisorDao;
import org.jsp.dao.PortfolioDao;
import org.jsp.dto.Advisor;
import org.jsp.dto.Portfolio;
import org.jsp.dto.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PortfolioService {

		@Autowired
		private PortfolioDao pDao;
		
		@Autowired
		private AdvisorDao aDao;
		
		//POST
		public ResponseEntity<ResponseStructure<Portfolio>> savePortfolio(Portfolio p, int AdvisorID){
			Optional<Advisor> recAdvisor = aDao.findAdvisorById(AdvisorID);
			ResponseStructure<Portfolio> structure = new ResponseStructure<>();
			if(recAdvisor.isPresent()) {
				
				Advisor a = recAdvisor.get();
				a.getPortfolios().add(p);
				p.setAdvisor(recAdvisor.get());
				aDao.updateAdvisor(recAdvisor.get());
				pDao.savePortfolio(p);
				
				structure.setData(p);
				structure.setMessage("Portfolio Added Succesfully");
				structure.setStatusCode(HttpStatus.CREATED.value());
				return new ResponseEntity<ResponseStructure<Portfolio>>(structure, HttpStatus.CREATED);
			}
//			Add Custom Exceptions later here, like Advisor not found kind
			throw null;
		}
		
		//PUT 
		public ResponseEntity<ResponseStructure<Portfolio>> updatePortfolio(Portfolio p,int advisorID){
			Optional<Advisor> recAdvisor = aDao.findAdvisorById(advisorID);
			ResponseStructure<Portfolio> structure = new ResponseStructure<>();
			if(recAdvisor.isPresent()) {
				
				p.setAdvisor(recAdvisor.get());
				pDao.updatePortfolio(p);
				
				structure.setData(p);
				structure.setMessage("Portfolio Updated Succesfully");
				structure.setStatusCode(HttpStatus.ACCEPTED.value());
				return new ResponseEntity<ResponseStructure<Portfolio>>(structure, HttpStatus.ACCEPTED);
			}
//			Add Exceptions here
			throw null;
		}
		
		//GET
		public ResponseEntity<ResponseStructure<Portfolio>> findById(int portfolioId){
			ResponseStructure<Portfolio> structure = new ResponseStructure<>();
			Optional<Portfolio> recPortfolio = pDao.findPortfolioById(portfolioId);
			if(recPortfolio.isPresent()) {
				structure.setMessage("Portfolio Found Successfully");
				structure.setData(recPortfolio.get());
				structure.setStatusCode(HttpStatus.OK.value());
				return new ResponseEntity<ResponseStructure<Portfolio>>(structure, HttpStatus.OK);
			}
//			Add Exceptions in place of Else Statement
			else {
				structure.setData(null);
				structure.setMessage("Portfolio Not Found");
				structure.setStatusCode(HttpStatus.NOT_FOUND.value());
				return new ResponseEntity<ResponseStructure<Portfolio>>(structure, HttpStatus.NOT_FOUND);
			}
		}
		
		//DELETE - /delete/{portfolio_id}
		public ResponseEntity<ResponseStructure<String>> deletePortfolio(int portfolioID){
			ResponseStructure<String> structure = new ResponseStructure<>();
			Optional<Portfolio> recPortfolio = pDao.findPortfolioById(portfolioID);
			if(recPortfolio.isPresent()) {
				pDao.deletePortfolio(portfolioID);
				structure.setMessage("Task Executed");
				structure.setData("Portfolio Deleted Succesfully");		
				structure.setStatusCode(HttpStatus.OK.value());
				return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
			}
//			Throw new Custom Exception here
			else {
				structure.setData(null);
				structure.setMessage("Portfolio Not Found");
				structure.setStatusCode(HttpStatus.NOT_FOUND.value());
				return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
			}
		} 

}


