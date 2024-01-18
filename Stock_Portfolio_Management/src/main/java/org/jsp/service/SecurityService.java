package org.jsp.service;

import java.util.Optional;

import org.jsp.dao.AdvisorDao;
import org.jsp.dao.PortfolioDao;
import org.jsp.dao.SecurityDao;
import org.jsp.dto.Security;
import org.jsp.dto.Advisor;
import org.jsp.dto.Portfolio;
import org.jsp.dto.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {
	@Autowired
	private SecurityDao sDao;

	@Autowired
	private PortfolioDao pDao;
	
//	@Autowired
//	private AdvisorDao aDao;
	
//	@Autowired
//	private AdvisorDao aDao;
	
	//POST
	public ResponseEntity<ResponseStructure<Security>> saveSecurity(Security s, int portfolioID){
		ResponseStructure<Security> structure = new ResponseStructure<>();
		Optional<Portfolio> recPortfolio = pDao.findPortfolioById(portfolioID);
		if(recPortfolio.isPresent()) {
			
			Portfolio p = recPortfolio.get();
			p.getSecurities().add(s);
			s.setPortfolio(p);
			pDao.updatePortfolio(p);
			sDao.saveSecurity(s);	
			
			structure.setData(s);
			structure.setMessage("Security Account Created Succesfully");
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Security>>(structure, HttpStatus.CREATED);
		}
		throw null;
	}
	
	//PUT 
	public ResponseEntity<ResponseStructure<Security>> updateSecurity(Security s, int portfolioID){
		ResponseStructure<Security> structure = new ResponseStructure<>();
		Optional<Portfolio> recPortfolio = pDao.findPortfolioById(portfolioID);
		if(recPortfolio.isPresent()) {
			Portfolio p = recPortfolio.get();
			s.setPortfolio(p);
			pDao.updatePortfolio(p);
			sDao.updateSecurity(s);
			
			structure.setData(s);
			structure.setMessage("Security Details Updated Succesfully");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Security>>(structure, HttpStatus.ACCEPTED);
		}
		throw null;
	}
	
	//GET
	public ResponseEntity<ResponseStructure<Security>> findById(int securityID){
		ResponseStructure<Security> structure = new ResponseStructure<>();
		Optional<Security> recSecurity = sDao.findSecurityById(securityID);
		if(recSecurity.isPresent()) {
			structure.setMessage("Security Found Successfully");
			structure.setData(recSecurity.get());
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Security>>(structure, HttpStatus.OK);
		}
		else {
			structure.setData(null);
			structure.setMessage("Security Not Found");
			structure.setStatusCode(HttpStatus.NOT_FOUND.value());
			return new ResponseEntity<ResponseStructure<Security>>(structure, HttpStatus.NOT_FOUND);
		}
	}
	
	//DELETE - /delete/{portfolio_id}
	public ResponseEntity<ResponseStructure<String>> deleteSecurity(int securityID){
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<Security> recSecurity = sDao.findSecurityById(securityID);
		if(recSecurity.isPresent()) {
			sDao.deleteSecurity(securityID);
			
			structure.setMessage("Task Executed");
			structure.setData("Security Deleted Succesfully");		
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		else {
			structure.setData(null);
			structure.setMessage("Security Not Found");
			structure.setStatusCode(HttpStatus.NOT_FOUND.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
		}
	} 
}
