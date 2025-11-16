export interface Usuario {
    id?: string | number;
    nombre: string;
    apellido: string;
    email: string;
    contrasenia: string;
    fechaRegistro: Date;
    ultimaActividad?: Date;
    activo: boolean;
}
