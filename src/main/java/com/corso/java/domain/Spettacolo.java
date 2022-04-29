package com.corso.java.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;

@Entity
@Table(name="spettacoli")
public class Spettacolo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String nome_spettacolo;

    @Lob
    private Cliente[] prenotazioni;

    private int n_prenotazioni;

    @Lob
    private ArrayList<Cliente> attesa;

    public Spettacolo(){
        this.prenotazioni = new Cliente[n_prenotazioni];
        this.attesa = new ArrayList<Cliente>();
    }

    public Spettacolo (String nome, int n){
        this.nome_spettacolo = nome;
        this.n_prenotazioni = n;
        this.prenotazioni = new Cliente[n_prenotazioni];
        this.attesa = new ArrayList<Cliente>();
    }

    public Spettacolo(int n){
        this.n_prenotazioni = n;
        this.prenotazioni = new Cliente[n_prenotazioni];
        this.attesa = new ArrayList<Cliente>();
    }


    //--------------------Getters&Setters

    public void setDimPrenotazione (int n){
        this.prenotazioni = new Cliente[n];
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome_spettacolo() {
        return nome_spettacolo;
    }

    public void setNome_spettacolo(String nome_spettacolo) {
        this.nome_spettacolo = nome_spettacolo;
    }

    public Cliente[] getPrenotazioni() {
        return prenotazioni;
    }

    public void setPrenotazioni(Cliente[] prenotazioni) {
        this.prenotazioni = prenotazioni;
    }

    public int getN_prenotazioni() {
        return n_prenotazioni;
    }

    public void setN_prenotazioni(int n_prenotazioni) {
        this.n_prenotazioni = n_prenotazioni;
    }

    public ArrayList<Cliente> getAttesa() {
        return attesa;
    }

    public void setAttesa(ArrayList<Cliente> attesa) {
        this.attesa = attesa;
    }

    //-----------------------toString

    @Override
    public String toString() {
        return "Spettacolo{" +
                "id='" + id + '\'' +
                ", prenotazioni=" + Arrays.toString(prenotazioni) +
                ", n_prenotazioni=" + n_prenotazioni +
                ", attesa=" + attesa +
                '}';
    }
}
