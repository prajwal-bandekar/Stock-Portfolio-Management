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
	
	public Optional<Advisor> verifyAdvisor(String email, String password){
		return aRepo.verifyAdvisor(email, password);
	}
		
	public Optional<Advisor> verifyAdvisor(long phone, String password){
		return aRepo.verifyAdvisor(phone, password);
	}

}
