import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SpettacoloService } from 'src/app/spettacolo.service';

@Component({
  selector: 'app-disdetta',
  templateUrl: './disdetta.component.html',
  styleUrls: ['./disdetta.component.css']
})
export class DisdettaComponent implements OnInit {

  id: String | null= '';
  nome: String | null = '';
  tel: String | null = '';


  constructor(private router : Router,
              private route : ActivatedRoute,
              private service : SpettacoloService)  
    { 
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.nome = this.route.snapshot.paramMap.get('nome');
      this.tel = this.route.snapshot.paramMap.get('tel');
    }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (confirm('Sicuro di voler eliminare la prenotazione di ' +this.nome)) {
      console.log(this.id, this.nome , this.tel);
      this.service.disdici(this.id, this.nome, this.tel).subscribe(e=>{
        console.log(e);
      })
      console.log('Prenotazione di' +this.nome+ ' eliminata');
      this.router.navigate(['/spettacolo/' +this.id]);
    } else {
      console.log('Prenotazione di' +this.nome+ ' ancora presente');
    }
  }

}
