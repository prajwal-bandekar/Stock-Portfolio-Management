package org.jsp.dto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Portfolio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Portfolio-ID")
	private int portfolioID;
	
	@Column(name="Portfolio-Domain", nullable=false)
	private String portfolioType;

	@Column(name="Portfolio-Created-on", nullable=false)
	private String creationDate;
	
	@ManyToOne
	@JoinColumn(name="AdvisorID")
	private Advisor advisor;

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

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}

	public Advisor getAdvisor() {
		return advisor;
	}

	public void setAdvisor(Advisor advisor) {
		this.advisor = advisor;
	}
	

//	@OneToMany(mappedBy="portfolio")
//	@JsonIgnore
//	private List<Security> securities;

	
//	getters and setters


//	public List<Security> getSecurities() {
//		return securities;
//	}
//
//	public void setSecurities(List<Security> securities) {
//		this.securities = securities;
	}
	
	