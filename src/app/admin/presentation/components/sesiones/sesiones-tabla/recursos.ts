import { Sesiones } from "../../../views/sesiones/sesiones";
import { tipo } from "./tipo";

export class recursos {
    id?: number;
    id_sesion?:Sesiones;
    id_tipo?:tipo;
    nombre?: string;
    file?: string;
    url?: string;
}