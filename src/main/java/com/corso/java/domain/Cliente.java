package com.corso.java.domain;

import java.io.Serializable;
import java.util.Objects;

public class Cliente implements Serializable {

    private String nome;
    private String numTelefono;

    public Cliente(String nome, String numTelefono) {
        this.nome = nome;
        this.numTelefono = numTelefono;
    }

    public Cliente() {
    }

    //-------------------------getters&Setter


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNumTelefono() {
        return numTelefono;
    }

    public void setNumTelefono(String numTelefono) {
        this.numTelefono = numTelefono;
    }

    //----------------------------toString

    @Override
    public String toString() {
        return "Cliente{" +
                "nome='" + nome + '\'' +
                ", numTelefono='" + numTelefono + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Cliente)) return false;
        Cliente cliente = (Cliente) o;
        return Objects.equals(nome, cliente.nome) && Objects.equals(numTelefono, cliente.numTelefono);
    }
}

