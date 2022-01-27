import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { Comune } from '../Classes/comune';
import { NewCliente } from '../Classes/new-cliente';
import { ClientiService } from '../Services/clienti.service';

@Component({
  selector: 'app-form-nuovo-cliente',
  templateUrl: './form-nuovo-cliente.component.html',
  styleUrls: ['./form-nuovo-cliente.component.css']
})
export class FormNuovoClienteComponent implements OnInit {

  cliente: NewCliente = new NewCliente();

 
  tipiCliente:any = [];
  comuni:any = [];

  constructor(
    private clienteService: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteService.getTipiCLiente().subscribe(params => this.tipiCliente = params);
     this.clienteService.getComuni().subscribe(items => this.comuni = items.nome);
 
  }

  addNuovoCliente(){

    this.clienteService.postNuovoCliente(this.cliente).subscribe(response => console.log(response));
    this.router.navigate(['']);
  }

}
