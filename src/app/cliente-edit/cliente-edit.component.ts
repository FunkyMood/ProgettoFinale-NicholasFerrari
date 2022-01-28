import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { Comune } from '../Classes/comune';
import { TipologiaCliente } from '../Classes/tipologia-cliente';
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

  modificaCliente(){
    this.clientiService.putClienteEdit(this.cliente).subscribe(response => console.log(response));
    this.router.navigate(['tabella']);
  }

}
