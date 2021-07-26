import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ptf } from '../model/ptf.model';

const httpOptions= {
  headers:  new  HttpHeaders(  { 'Content-Type' : 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class PtfService {

  
 
  url: string='http://localhost:7070/PTF/api/';
 


  constructor(
    private http: HttpClient) { }


listePtf(id:number): Observable<Ptf[]>{
  return this.http.get<Ptf[]>(this.url+'allByPlan/'+id);
}

supprimerPlanTravail(id : number) {
  //console.log(id);
  //const url = `${this.url}/de${id}`;
  return this.http.delete(this.url+'delete/'+id, httpOptions);
  }
  //addptf
  ajouterFactureProjet(id:number,prod:Ptf): Observable<Ptf>{
  ///plant/{projetId}
    return this.http.post<Ptf>(this.url+'plant/'+id, prod, httpOptions);
  }
  
}
