package org.jsp.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
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
	private LocalDate purchaseDate;
	
	@Column(name="Security-Purchase-Price", nullable=false)
	private int purchasePrice;
	
	@Column(name="Security-Quantity", nullable=false)
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name="PortfilioID")
	private Portfolio portfolio;
	
	
}