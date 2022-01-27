import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Classes/cliente';
import { Fattura } from '../Classes/fattura';
import { StatoFattura } from '../Classes/stato-fattura';
import { Fatture } from '../Interfaces/fatture';

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

  getStatoFattura(id:number){
    return this.http.get<StatoFattura>('http://epicode.online/epicodebeservice_v2/api/clienti/api/fatture/stato/' + id +'?page=0&size=20&sort=id,ASC');
  }
}
