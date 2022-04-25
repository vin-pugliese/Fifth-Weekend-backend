package com.corso.java.service;

import com.corso.java.domain.Cliente;
import com.corso.java.domain.Spettacolo;
import com.corso.java.repository.SpettacoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SpettacoloServiceImpl implements SpettacoloService{

    @Autowired
    SpettacoloRepository spettacoloRepository;

    @Override
    public List<Spettacolo> findAll() {
        return spettacoloRepository.findAll();
    }

    @Override
    public Spettacolo findById(String id) {
        return spettacoloRepository.findById(id).orElse(null);
    }

    @Override
    public Spettacolo create(int n_prenotazione) {
        Spettacolo spettacolo = new Spettacolo((n_prenotazione));
        return spettacoloRepository.save(spettacolo);
    }

    @Override
    public void deleteById(String id) {
        spettacoloRepository.deleteById(id);
    }

    @Override
    public boolean libero(String id) {
        Spettacolo spettacolo = this.findById(id);

        Cliente[] prenotazioni = spettacolo.getPrenotazioni();
        for(Cliente c: prenotazioni)
            if(c == null)
                return true;

        return false;
    }

    @Override
    public int trova(String id, String nome, String tel) {
        Spettacolo spettacolo = this.findById(id);
        if(libero(id)) {
            for (Cliente c : spettacolo.getPrenotazioni())
                if (c.getNome().equals(nome) && c.getNumTelefono().equals(tel))
                    return 0;
        } else{
            for (Cliente c : spettacolo.getAttesa())
                if (c.getNome().equals(nome) && c.getNumTelefono().equals(tel))
                    return 1;
                }

        return -1;
    }

    @Override
    public void prenota(String id, String nome, String tel) {
        Spettacolo spettacolo = this.findById(id);
        Cliente cliente = new Cliente(nome, tel);
        Cliente[] prenotazioni = spettacolo.getPrenotazioni();
        ArrayList<Cliente> attesa = spettacolo.getAttesa();
        if(libero(id)){
            for(int i =0; i<spettacolo.getN_prenotazioni(); i++)
                if(prenotazioni[i] == null) {
                    prenotazioni[i] = cliente;
                    spettacolo.setPrenotazioni(prenotazioni);
                    spettacoloRepository.save(spettacolo);
                    return;
                }
        }
        else{
            attesa.add(cliente);
            spettacolo.setAttesa(attesa);
            spettacoloRepository.save(spettacolo);
        }
    }

    @Override
    public void disdici(String id, String nome, String tel) {
        Spettacolo spettacolo = this.findById(id);
        Cliente[] prenotazioni = spettacolo.getPrenotazioni();
        ArrayList<Cliente> attesa = spettacolo.getAttesa();
        Cliente cliente = new Cliente(nome, tel);
        for(int i =0; i<spettacolo.getN_prenotazioni(); i++){
            if(prenotazioni[i].equals(cliente)) {
                prenotazioni[i]= null;
                if(!attesa.isEmpty()) {
                    cliente = attesa.get(0);
                    prenotazioni[i] = cliente;
                    attesa.remove(0);
                    spettacolo.setAttesa(attesa);
                }
            }
        }
        spettacolo.setPrenotazioni(prenotazioni);
        spettacoloRepository.save(spettacolo);
     }

    @Override
    public boolean incompleto(String id) {
        Spettacolo spettacolo = this.findById(id);
        Cliente[] prenotazioni = spettacolo.getPrenotazioni();
        ArrayList<Cliente> attesa = spettacolo.getAttesa();
        for(int i =0;i<spettacolo.getN_prenotazioni(); i++){
            for(int j=0; j<attesa.size();j++){
                if(prenotazioni[i].equals(attesa.get(j)))
                    return true;
            }
        }
        return false;
    }
}
