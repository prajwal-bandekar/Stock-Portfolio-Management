package org.jsp.dto;

import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity

public class Advisor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="financialAdvisor_ID")
	private int advisorID;
	
	@Column(name="Advisor_FirstName", nullable=false)
	 private String aFirstName;
	
	@Column(name="Advisor_LastName", nullable=false)
	 private String aLastName;
	
	@Column(name="Email", unique=true, nullable=false)
	 private String aEmail;
	
	@Column(name="Phone", unique=true, nullable=false)
	private long aPhone;
	
	@Column(name="Password", nullable=false)
	private String aPassword;
	
	@OneToMany(mappedBy="advisor")
	private List<Portfolio> portfolios;

	public int getAdvisorID() {
		return advisorID;
	}

	public void setAdvisorID(int advisorID) {
		this.advisorID = advisorID;
	}

	public String getaFirstName() {
		return aFirstName;
	}

	public void setaFirstName(String aFirstName) {
		this.aFirstName = aFirstName;
	}

	public String getaLastName() {
		return aLastName;
	}

	public void setaLastName(String aLastName) {
		this.aLastName = aLastName;
	}

	public String getaEmail() {
		return aEmail;
	}

	public void setaEmail(String aEmail) {
		this.aEmail = aEmail;
	}

	public long getaPhone() {
		return aPhone;
	}

	public void setaPhone(long aPhone) {
		this.aPhone = aPhone;
	}

	public String getaPassword() {
		return aPassword;
	}

	public void setaPassword(String aPassword) {
		this.aPassword = aPassword;
	}

	public List<Portfolio> getPortfolios() {
		return portfolios;
	}

	public void setPortfolios(List<Portfolio> portfolios) {
		this.portfolios = portfolios;
	}
	
	
}