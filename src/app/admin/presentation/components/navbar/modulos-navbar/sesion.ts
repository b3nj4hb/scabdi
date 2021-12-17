export class Sesion {
    id?: number;
    no_sesion?: string;
    id_modulo?: {
        id?: number;
        area?: {
            id?: number;
            nombre?: string;
        }
        nombre?: string;
        descripcion?: string;
        recursos?: number;
    }
    fe_inicio_sesion?: string;
    fe_fin_sesion?: string;
}
