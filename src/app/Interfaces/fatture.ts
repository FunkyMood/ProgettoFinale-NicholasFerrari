import { Fattura } from "../Classes/fattura";
export interface Fatture {
    content:Fattura;
    empty:boolean;
    first:boolean;
    last:boolean;
    number:number;
    numberOfElements:number;
    pageable:Object;
    size:number;
    sort:Object;
    totalElements:number;
    totalPages:number;
}
