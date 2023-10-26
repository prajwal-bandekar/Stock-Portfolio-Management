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
	
	public Advisor saveAdvisor(Advisor a) {
		return aRepo.save(a);
	}
	
	public Advisor updateAdvisor(Advisor a) {
		return aRepo.save(a);
	}
	
	public Optional<Advisor> findAdvisorById(int advisorID) {
		return aRepo.findById(advisorID);
	}
	
	public void deleteAdvisor(int advisorID) {
		aRepo.deleteById(advisorID);
	}
	
	//Add Methods for Verification
	
	public Optional<Advisor> verifyAdvisor(String aEmail, String aPassword){
		return aRepo.verifyAdvisor(aEmail, aPassword);
	}
		
	public Optional<Advisor> verifyAdvisor(long aPhone, String aPassword){
		return aRepo.verifyAdvisor(aPhone, aPassword);
	}

}
