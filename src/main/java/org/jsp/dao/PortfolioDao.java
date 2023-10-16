package org.jsp.dao;

import java.util.Optional;

import org.jsp.dto.Portfolio;
import org.jsp.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class PortfolioDao {
	@Autowired
	private PortfolioRepository pRepo;
	
	public Portfolio savePortfolio(Portfolio s) {
		return pRepo.save(s);
	}
	
	public Portfolio updatePortfolio(Portfolio s) {
		return pRepo.save(s);
	}
	
	public Optional<Portfolio> findPortfolioById(int sID) {
		return pRepo.findById(sID);
	}
	
	public void deletePortfolio(int sID) {
		pRepo.deleteById(sID);
	}
	
}
