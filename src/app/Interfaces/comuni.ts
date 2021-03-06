import { Comune } from "../Classes/comune";

export interface Comuni {
    content:Array<Comune>;
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
