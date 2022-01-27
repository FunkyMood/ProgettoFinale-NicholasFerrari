import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../Classes/fattura';
import { FattureService } from '../Services/fatture.service';

@Component({
  selector: 'app-tabella-fatture',
  templateUrl: './tabella-fatture.component.html',
  styleUrls: ['./tabella-fatture.component.css']
})
export class TabellaFattureComponent implements OnInit {

  listaFatture:any = [];

  constructor(private fattureService: FattureService,private router:Router) { }

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(params => this.listaFatture = params.content );
  }

  detailFattura(id:number){
    this.router.navigate(['fattura/'+ id]);
  }

}
