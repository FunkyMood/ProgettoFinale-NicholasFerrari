import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { Comune } from '../Classes/comune';
import { NewCliente } from '../Classes/new-cliente';
import { TipologiaCliente } from '../Classes/tipologia-cliente';
import { ClientiService } from '../Services/clienti.service';

@Component({
  selector: 'app-form-nuovo-cliente',
  templateUrl: './form-nuovo-cliente.component.html',
  styleUrls: ['./form-nuovo-cliente.component.css']
})
export class FormNuovoClienteComponent implements OnInit {

  cliente: NewCliente = new NewCliente();

 
  tipiCliente:TipologiaCliente[] = [];
  comuni:Comune[] = [];

  constructor(
    private clienteService: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteService.getTipiCLiente().subscribe(params => this.tipiCliente = params);
     this.clienteService.getComuni().subscribe(items => this.comuni= items.content);
 
  }

  addNuovoCliente(){
    this.clienteService.postNuovoCliente(this.cliente);
    this.router.navigate(['']);
  }

}
