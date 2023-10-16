package org.jsp.dao;

import java.util.Optional;

import org.jsp.dto.Security;
import org.jsp.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SecurityDao {

	@Autowired
	private SecurityRepository sRepo;
	
	public Security saveSecurity(Security s) {
		return sRepo.save(s);
	}
	
	public Security updateSecurity(Security s) {
		return sRepo.save(s);
	}
	
	public Optional<Security> findSecurityById(int securityID) {
		return sRepo.findById(securityID);
	}
	
	public void deleteSecurity(int securityID) {
		sRepo.deleteById(securityID);
	}
	
}
