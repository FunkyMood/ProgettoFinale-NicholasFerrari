import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { ClientiService } from '../Services/clienti.service';

@Component({
  selector: 'app-tabella-clienti',
  templateUrl: './tabella-clienti.component.html',
  styleUrls: ['./tabella-clienti.component.css']
})
export class TabellaClientiComponent implements OnInit {

  listaClienti: Cliente[] = [];

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(clienti => this.listaClienti = clienti.content)
  }
  detailCliente(id:number){
    this.router.navigate(['cliente/'+ id]);

  }
  deleteCliente(item:Cliente){
    this.clientiService.deleteCliente(item).subscribe(data => {
      this.listaClienti = this.listaClienti.filter(el => el !== item)
    })
  }

}
