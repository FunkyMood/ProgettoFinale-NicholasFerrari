import { Cliente } from "../Classes/cliente";

export interface Clienti {
    content:Array<Cliente>;
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
