package org.jsp.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Advisor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="financialAdvisor_ID")
	private int advisorID;
	
	@Column(name="Advisor_Name", nullable=false)
	 private String name;
	
	@Column(name="Email", unique=true, nullable=false)
	 private String email;
	
	@Column(name="Phone", unique=true, nullable=false)
	private long phone;
	
	@Column(name="Password", nullable=false)
	private String password;
	
	@OneToMany(mappedBy="advisor")
//	@JsonIgnore
	private List<Portfolio> portfolios;
	
//	getter setters
	public int getAdvisorID() {
		return advisorID;
	}

	public void setAdvisorID(int advisorID) {
		this.advisorID = advisorID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Portfolio> getPortfolios() {
		return portfolios;
	}

	public void setPortfolios(List<Portfolio> portfolios) {
		this.portfolios = portfolios;
	}


	
	
}