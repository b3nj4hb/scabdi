import { Modulo } from "../../components/navbar/modulos-navbar/modulo";

export class Sesion {
    id:number = 0;
    nombre?:string;
    modulo:Modulo = new Modulo;
    area?:string;
    inicio?:string;
    fin?:string;
}
