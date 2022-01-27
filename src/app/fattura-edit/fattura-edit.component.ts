import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Classes/cliente';
import { Fattura } from '../Classes/fattura';
import { StatoFattura } from '../Classes/stato-fattura';
import { ClientiService } from '../Services/clienti.service';
import { FattureService } from '../Services/fatture.service';

@Component({
  selector: 'app-fattura-edit',
  templateUrl: './fattura-edit.component.html',
  styleUrls: ['./fattura-edit.component.css']
})
export class FatturaEditComponent implements OnInit {

  fattura: Fattura = new Fattura()
  statofattura: StatoFattura[] = [];
  cliente:Cliente[] = []

  constructor(
    private fatturaService: FattureService,
    private router: Router,
    private route: ActivatedRoute,
    private clientiService: ClientiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fatturaService.getFattureById(params['id']).subscribe(fattura => {
        this.fattura = fattura;
      });
      this.fatturaService.getStatoFattura().subscribe(params => this.statofattura = params.content);
      this.clientiService.getAllClienti().subscribe(params => this.cliente = params.content);
    });  
  }

  modificaFattura(){
         this.fatturaService.putFatturaEdit(this.fattura).subscribe(response => console.log(response));
         this.router.navigate(['fatture']);
  }
}
