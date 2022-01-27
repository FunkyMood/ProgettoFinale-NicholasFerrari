import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { Comune } from '../Classes/comune';
import { TipologiaCliente } from '../Classes/tipologia-cliente';
import { Clienti } from '../Interfaces/clienti';
import { ClientiService } from '../Services/clienti.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  cliente: Cliente = new Cliente();
  tipiCliente:TipologiaCliente[] = [];
  comuni:Comune[] = [];

  constructor(
    private http: HttpClient,
    private clientiService: ClientiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getClientById(params['id']).subscribe(cliente => {
        this.cliente = cliente;
      });
      this.clientiService.getTipiCLiente().subscribe(params => this.tipiCliente = params);
      this.clientiService.getComuni().subscribe(items => this.comuni= items.content);
    });
  }

  modificaCliente(id:number,cliente:Cliente ){
    this.clientiService.putClienteEdit(id,cliente);
    this.router.navigate(['']);
  }

}
