import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { ClientiService } from '../Services/clienti.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(
    private route: ActivatedRoute,
    private clientiService: ClientiService,
    private router: Router
  
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getClientById(params['id']).subscribe(cliente => {
        this.cliente = cliente;
      });
    });
  }

  goToEdit(id:number){
    this.router.navigate(['clienteEdit/'+ id]);
  }

}
