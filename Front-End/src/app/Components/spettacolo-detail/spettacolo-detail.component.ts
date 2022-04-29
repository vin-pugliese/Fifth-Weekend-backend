import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Model/Cliente';
import {ActivatedRoute, Router} from '@angular/router';
import { SpettacoloService } from 'src/app/spettacolo.service';



@Component({
  selector: 'app-spettacolo-detail',
  templateUrl: './spettacolo-detail.component.html',
  styleUrls: ['./spettacolo-detail.component.css']
})
export class SpettacoloDetailComponent implements OnInit {

  clientiPrenotati : Cliente[] = [];
  clientiAttesa : Cliente[] = [];
  id : String | null = '';

  constructor(private router : Router,
              private route : ActivatedRoute,
              private service : SpettacoloService) 
              { 
                this.id = this.route.snapshot.paramMap.get('id');
                this.loadPrenotati();
                this.loadAttesa();
              }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  showHidden():boolean{
    return this.clientiPrenotati[0] == null;
  } 
  
  loadPrenotati(){
    
    this.service.getClientiPrenotati(this.id)
      .subscribe(e=>{
        this.clientiPrenotati = e.filter(this.notEmpty);
      })
  }

  loadAttesa(){
    
    this.service.getClientiAttesa(this.id)
      .subscribe(e=>{
        this.clientiAttesa = e;
      })
  }

  notEmpty<Cliente>(value: Cliente): value is NonNullable<Cliente> {
    return value !== null && value !== undefined;
}

  


}
