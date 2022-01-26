import { Cliente } from "./cliente";

export class Fattura {
    id?:number;
    data!:string;
    numero!:number;
    anno!:number;
    importo!:number;
    stato!:any;
    cliente!:Cliente;
    
}
