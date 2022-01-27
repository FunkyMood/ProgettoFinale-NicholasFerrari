import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { Fattura } from '../Classes/fattura';
import { FattureService } from '../Services/fatture.service';

@Component({
  selector: 'app-cliente-fattura',
  templateUrl: './cliente-fattura.component.html',
  styleUrls: ['./cliente-fattura.component.css']
})
export class ClienteFatturaComponent implements OnInit {

  fattura: Fattura = new Fattura();
  cliente: Cliente = new Cliente();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fatturaByCliente: FattureService
  ) { }

  ngOnInit(): void {
    
  }

}
