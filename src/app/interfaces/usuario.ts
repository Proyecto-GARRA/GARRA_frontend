export class Usuario {
    id!: number;
    username!: string;
    password!: string;
    rol!: Rol[];
}

export class Rol {
    id!: number;
    name!: RolEnum[];
}

export class RolEnum {
    ROOT!: string;
    ADMIN!: string;
    USER!: string;
}

export class Credenciales {
    username!: string;
    password!: string;
}
