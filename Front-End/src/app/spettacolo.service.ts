import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spettacolo } from './Model/Spettacolo';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpettacoloService {

  constructor(private httpClient: HttpClient) {}

  getAll() : Observable<any>{
    return this.httpClient.get('http://localhost:8080/spettacolo/v1');
  } 

  getClientiPrenotati(id: any) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/spettacolo/v1/getprenotazioni/'+id);
  }

  getClientiAttesa(id: any) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/spettacolo/v1/getattesa/'+id);
  }

  disdici(id: any, nome: any, tel: any) : Observable<any>{
    return this.httpClient.delete('http://localhost:8080/spettacolo/v1/disdici?id=' +id 
                                  + '&name=' +nome 
                                  + '&tel=' +tel);
  }



}
