package com.corso.java.service;

import com.corso.java.domain.Spettacolo;

import java.util.List;
import java.util.Optional;

public interface SpettacoloService {

    List<Spettacolo> findAll();

    Spettacolo findById(String id);

    Spettacolo create(int n_prenotazioni);

    void deleteById(String id);

    boolean libero(String id);

    int trova(String id, String nome, String tel);

    void prenota(String id, String nome, String tel);

    void disdici(String id, String nome, String tel);

    boolean incompleto(String id);
}
