import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Classes/cliente';
import { Fattura } from '../Classes/fattura';
import { Fatture } from '../Interfaces/fatture';
import { StatiFattura } from '../Interfaces/stati-fattura';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http:HttpClient) { }

  getAllFatture(){
    return this.http.get<Fatture>(environment.getAllFatture);
  }

  getFattureById(id:number){
    return this.http.get<Fattura>(environment.getFattureById + id);
  }
  getFatturaByCliente(){
    return this.http.get<Cliente[]>(environment.getfatturaByCliente)
  }

  getStatoFattura(){
    return this.http.get<StatiFattura>(environment.getStatoFattura);
  }

  postFattura(fattura:Fattura){
    return this.http.post<Fattura>(environment.postFattura, fattura)
  }

  putFatturaEdit(fattura:Fattura){
    return this.http.put<Fattura>(environment.putFatturaEdit + fattura.id, fattura);
  }
}
