import { Provincia } from "../Classes/provincia";


export interface Province {
    content:Array<Provincia>;
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
