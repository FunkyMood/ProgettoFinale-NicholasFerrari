import { StatoFattura } from "../Classes/stato-fattura";

export interface StatiFattura {
    content:Array<StatoFattura>;
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
