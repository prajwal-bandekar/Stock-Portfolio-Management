package org.jsp.dto;

import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Advisor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="financialAdvisor-ID")
	private int advisorID;
	
	@Column(name="Advisor-FirstName")
	 private String aFirstName;
	
	@Column(name="Advisor-LastName")
	 private String aLastName;
	
	@Column(name="Email", unique=true)
	 private String aEmail;
	
	@Column(name="Phone", unique=true)
	private long aPhone;
	
	@Column(name="Password", nullable=false)
	private String aPassword;
	
	@OneToMany(mappedBy="advisor")
	private List<Portfolio> portfolios;
}