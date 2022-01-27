import { Component, OnInit } from '@angular/core';
import { Fattura } from '../Classes/fattura';
import { FattureService } from '../Services/fatture.service';

@Component({
  selector: 'app-tabella-fatture',
  templateUrl: './tabella-fatture.component.html',
  styleUrls: ['./tabella-fatture.component.css']
})
export class TabellaFattureComponent implements OnInit {

  listaFatture:any = [];

  constructor(private fattureService: FattureService) { }

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(params => this.listaFatture = params.content );

    
  }

}
