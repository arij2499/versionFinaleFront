import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pif } from '../model/pif.model';


const httpOptions= {
  headers:  new  HttpHeaders(  { 'Content-Type' : 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class PifService {

  


  url: string='http://localhost:7070/PIF/api/';
 


  constructor(
    private http: HttpClient) { }


listePif(id:number): Observable<Pif[]>{
  return this.http.get<Pif[]>(this.url+'allByPlan/'+id);
}
///delete/{id}

supprimerProjetInitial(id : number) {
  //console.log(id);
  //const url = `${this.url}/de${id}`;
  return this.http.delete(this.url+'delete/'+id, httpOptions);
  }


 /* ajouterProjet(prod:Projet): Observable<Projet>{

  return this.http.post<Projet>(this.Urlajout, prod, httpOptions);
}

supprimerProjet(id : number) {
  console.log(id);
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }


   updateProjet(prod :Projet) : Observable<Projet>
   {
   return this.http.put<Projet>(this.adress, prod, httpOptions);
   }
   consulterProjet(id: number): Observable<Projet> {
    const URLGT = `${this.api}/${id}`;
   return this.http.get<Projet>(URLGT);
   }

   visualiserProjet(prod :Projet) : Observable<Projet>
   {
   return this.http.put<Projet>(this.adress, prod, httpOptions);
   } */
}
