package org.jsp.dto;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
public class Portfolio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Portfolio-ID")
	private int portfolioID;
	
	@Column(name="Portfolio-Domain", nullable=false)
	private String portfolioType;

	@Column(name="Portfolio-Created-on", nullable=false)
	private LocalDate creationDate;
	
	@ManyToOne
	@JoinColumn(name="AdvisorID")
	private Advisor advisor;

	@OneToMany(mappedBy="portfolio")
	private List<Security> securities;

	public int getPortfolioID() {
		return portfolioID;
	}

	public void setPortfolioID(int portfolioID) {
		this.portfolioID = portfolioID;
	}

	public String getPortfolioType() {
		return portfolioType;
	}

	public void setPortfolioType(String portfolioType) {
		this.portfolioType = portfolioType;
	}

	public LocalDate getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(LocalDate creationDate) {
		this.creationDate = creationDate;
	}

	public Advisor getAdvisor() {
		return advisor;
	}

	public void setAdvisor(Advisor advisor) {
		this.advisor = advisor;
	}

	public List<Security> getSecurities() {
		return securities;
	}

	public void setSecurities(List<Security> securities) {
		this.securities = securities;
	}
	
	
}