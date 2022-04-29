package com.corso.java.repository;

import com.corso.java.domain.Spettacolo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpettacoloRepository extends JpaRepository<Spettacolo, String> {

}
