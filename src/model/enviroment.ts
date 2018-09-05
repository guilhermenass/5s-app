export class Enviroment {
    id: number;
    block: string;
    description: string;
    enviroment_types_id: number;
    name: string;
    units_id: number;
    users_id: number;

    constructor(id: number,
                block: string,
                description: string,
                enviroment_types_id: number,
                name: string,
                units_id: number,
                users_id: number){
        this.id = id;
        this.block = block;
        this.description = description;
        this.enviroment_types_id = enviroment_types_id;
        this.name = name;
        this.units_id = units_id;
        this.users_id = users_id;
    }
}
