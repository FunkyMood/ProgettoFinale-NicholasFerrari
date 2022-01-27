import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { Fattura } from '../Classes/fattura';
import { StatoFattura } from '../Classes/stato-fattura';
import { ClientiService } from '../Services/clienti.service';
import { FattureService } from '../Services/fatture.service';

@Component({
  selector: 'app-form-nuova-fattura',
  templateUrl: './form-nuova-fattura.component.html',
  styleUrls: ['./form-nuova-fattura.component.css']
})
export class FormNuovaFatturaComponent implements OnInit {

  fattura: Fattura = new Fattura();
  statofattura: StatoFattura[] = [];
  cliente:Cliente[] = []

  constructor(
    private fatturaService: FattureService,
    private router: Router,
    private route: ActivatedRoute,
    private clientiService: ClientiService,
  ) { }

  ngOnInit(): void {
    this.fatturaService.getStatoFattura().subscribe(params => this.statofattura = params.content);
    this.clientiService.getAllClienti().subscribe(params => this.cliente = params.content);
    
  }
  addFattura(){
    this.fatturaService.postFattura(this.fattura);
    this.router.navigate(['fatture']);
  }
}
