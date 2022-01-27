import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../Classes/fattura';
import { FattureService } from '../Services/fatture.service';


@Component({
  selector: 'app-fattura-detail',
  templateUrl: './fattura-detail.component.html',
  styleUrls: ['./fattura-detail.component.css']
})
export class FatturaDetailComponent implements OnInit {

  fattura: Fattura = new Fattura();


  constructor(
    private route: ActivatedRoute,
    private fattureService: FattureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fattureService.getFattureById(params['id']).subscribe(fattura => this.fattura = fattura);
    })
  }

  modificaFattura(id:number){
    this.router.navigate(['fatturaEdit/'+ id]);
  }

}
