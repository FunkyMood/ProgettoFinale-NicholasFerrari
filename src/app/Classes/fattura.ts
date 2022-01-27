import { Cliente } from "./cliente";
import { StatoFattura } from "./stato-fattura";

export class Fattura {
    id!:number;
    data!:string;
    numero!:number;
    anno!:number;
    importo!:number;
    stato!:StatoFattura;
    cliente!:Cliente;
    
    constructor(){
        this.cliente= new Cliente();
        this.stato = new StatoFattura();
    }
}
