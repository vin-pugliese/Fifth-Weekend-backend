import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private router : Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
  }

  handleSubmit(addPrenotazione: NgForm){
    const id = (addPrenotazione.value['id']);
    let nome_cliente = addPrenotazione.value['nome_cliente'];
    let tel = addPrenotazione.value['tel'];

    console.log(id+nome_cliente+tel);

    this.httpClient.put('http://localhost:8080/spettacolo/v1/prenota?id='+id+
                        '&name='+nome_cliente+
                        '&tel='+tel, {}).subscribe();
  }
}












