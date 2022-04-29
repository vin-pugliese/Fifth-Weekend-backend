import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SpettacoloService } from 'src/app/spettacolo.service';

@Component({
  selector: 'app-new-spettacolo',
  templateUrl: './new-spettacolo.component.html',
  styleUrls: ['./new-spettacolo.component.css']
})
export class NewSpettacoloComponent implements OnInit {

  n_prenotazione : number = 0;
  nome_spettacolo : String = '';

  constructor(private httpClient: HttpClient,
              private router: Router ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
  }

  handleSubmit(addSpettacolo: NgForm) {
    this.n_prenotazione = parseInt(addSpettacolo.value['n_prenotazioni']);
    this.nome_spettacolo = (addSpettacolo.value['nome_spettacolo']);

    console.log(this.n_prenotazione);
    this.httpClient
      .post('http://localhost:8080/spettacolo/v1/create', 
      {nome_spettacolo: this.nome_spettacolo,
       n_prenotazioni: this.n_prenotazione
      })
      .subscribe((e)=>{
        console.log(e);
      })
  }

}
