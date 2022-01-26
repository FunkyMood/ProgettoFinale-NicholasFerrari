import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fattura } from '../Classes/fattura';
import { Fatture } from '../Interfaces/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http:HttpClient) { }

  getAllFatture(){
    return this.http.get<Fatture>(environment.getAllFatture);
  }
}
