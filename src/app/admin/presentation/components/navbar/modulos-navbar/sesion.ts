import { Modulo } from "./modulo";

export class Sesion {
    id?: number;
    no_sesion?: string;
    id_modulo: Modulo = new Modulo;
    fe_inicio_sesion?: string;
    fe_fin_sesion?: string;
}


