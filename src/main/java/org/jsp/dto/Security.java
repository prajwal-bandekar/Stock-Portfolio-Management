package org.jsp.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class Security {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Security-ID")
	private int securityID;
	
	@Column(name="Security-Name", nullable=false)
	private String securityName;
	
	@Column(name="Security-Category", nullable=false)
	private  String category;
	
	@Column(name="Security-Purchase-Date", nullable=false)
	private String purchaseDate;
	
	@Column(name="Security-Purchase-Price", nullable=false)
	private int purchasePrice;
	
	@Column(name="Security-Quantity", nullable=false)
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name="PortfilioID")
	@JsonIgnore
	private Portfolio portfolio;

	public int getSecurityID() {
		return securityID;
	}

	public void setSecurityID(int securityID) {
		this.securityID = securityID;
	}

	public String getSecurityName() {
		return securityName;
	}

	public void setSecurityName(String securityName) {
		this.securityName = securityName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public int getPurchasePrice() {
		return purchasePrice;
	}

	public void setPurchasePrice(int purchasePrice) {
		this.purchasePrice = purchasePrice;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Portfolio getPortfolio() {
		return portfolio;
	}

	public void setPortfolio(Portfolio portfolio) {
		this.portfolio = portfolio;
	}
	
	
}