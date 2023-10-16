package org.jsp.repository;

import org.jsp.dto.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepository  extends JpaRepository<Portfolio, Integer> {

}
