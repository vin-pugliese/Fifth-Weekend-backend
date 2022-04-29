import { Component, OnInit } from '@angular/core';
import { SpettacoloService } from '../spettacolo.service';
import { Spettacolo } from '../Model/Spettacolo';
import { Cliente } from '../Model/Cliente';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-spettacoli',
  templateUrl: './list-spettacoli.component.html',
  styleUrls: ['./list-spettacoli.component.css']
})
export class ListSpettacoliComponent implements OnInit {

  spettacoli : Spettacolo[] = [];
  
  constructor(private service : SpettacoloService,
              private router : Router,
              private httpClient : HttpClient) 
    {             
      this.loadSpettacoli();
    }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;    
  }

  showWelcome():boolean{
    return this.spettacoli.length === 0;
  }

  loadSpettacoli(){
    this.service.getAll()
    .subscribe( e =>{
      console.log(e);
      this.spettacoli = e;
    });
  }




  

}
