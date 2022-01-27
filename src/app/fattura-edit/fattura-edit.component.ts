import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../Classes/fattura';
import { FattureService } from '../Services/fatture.service';

@Component({
  selector: 'app-fattura-edit',
  templateUrl: './fattura-edit.component.html',
  styleUrls: ['./fattura-edit.component.css']
})
export class FatturaEditComponent implements OnInit {

  fattura: Fattura = new Fattura()

  constructor(
    private fatturaService: FattureService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fatturaService.getFattureById(params['id']).subscribe(fattura => {
        this.fattura = fattura;

      });
    })
  }
}
