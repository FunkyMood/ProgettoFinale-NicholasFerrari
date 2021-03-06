import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clienti } from '../Interfaces/clienti';
import { Cliente } from '../Classes/cliente';
import { Comune } from '../Classes/comune';
import { NewCliente } from '../Classes/new-cliente';
import { TipologiaCliente } from '../Classes/tipologia-cliente';
import { Comuni } from '../Interfaces/comuni';
import { Fattura } from '../Classes/fattura';




@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http: HttpClient) { }

  getAllClienti() {
    return this.http.get<Clienti>(environment.getallClienti)
  }
  getClientById(id: string) {
    return this.http.get<Cliente>(environment.getclientiById + id)
  }
  postNuovoCliente(cliente: NewCliente) {
    return this.http.post<NewCliente>(environment.postNuovoCliente, cliente)
  }
  getTipiCLiente(){
    return this.http.get<TipologiaCliente[]>(environment.gettipiCliente);
  }
  deleteCliente(item:Cliente){
    return this.http.delete(environment.deleteCliente + item.id)
  }
  getComuni(){
    return this.http.get<Comuni>(environment.getComuni);
  }

  putClienteEdit(cliente:Cliente){
    return this.http.put<Cliente>(environment.putClienteEdit + cliente.id, cliente);
  }
  getFatturaByCliente(id:number){
    return this.http.get<Fattura>('http://epicode.online/epicodebeservice_v2/api/fatture/cliente/'+id+'?page=0&size=20&sort=id,ASC')
  }


}
