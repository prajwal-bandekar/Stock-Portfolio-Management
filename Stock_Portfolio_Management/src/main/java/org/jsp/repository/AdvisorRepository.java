package org.jsp.repository;

import java.util.Optional;

import org.jsp.dto.Advisor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdvisorRepository extends JpaRepository<Advisor, Integer>{

	@Query("select a from Advisor a where a.email=?1 and a.password=?2")
	Optional<Advisor> verifyAdvisor(String email, String password);

	@Query("select a from Advisor a where a.phone=?1 and a.password=?2")
	Optional<Advisor> verifyAdvisor(long phone, String password);
	
}
