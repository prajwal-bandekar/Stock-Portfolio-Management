package org.jsp.dao;

import java.util.Optional;

import org.jsp.dto.Advisor;
import org.jsp.repository.AdvisorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class AdvisorDao {
	@Autowired
	private AdvisorRepository aRepo;
	
	public Advisor saveAdvisor(Advisor s) {
		return aRepo.save(s);
	}
	
	public Advisor updateAdvisor(Advisor s) {
		return aRepo.save(s);
	}
	
	public Optional<Advisor> findAdvisorById(int sID) {
		return aRepo.findById(sID);
	}
	
	public void deleteAdvisor(int sID) {
		aRepo.deleteById(sID);
	}
	
	//Add Methods for Verification
	
	public Optional<Advisor> verifyAdvisor(String aEmail, String aPassword){
		return aRepo.verifyAdvisor(aEmail, aPassword);
	}
		
	public Optional<Advisor> verifyAdvisor(long aPhone, String aPassword){
		return aRepo.verifyAdvisor(aPhone, aPassword);
	}

}
