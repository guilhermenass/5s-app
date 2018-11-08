export class EvaluationExecutionDto {

    id: number;
    status: number;
    finish_date: Date;
    enviroment_name: string;
    enviroment_block: string;
    enviroment_type_id: number;
    audit_title: string;
    audit_initial_date: Date;
    audit_due_date: Date;
    email: string;
    responsible_id: number;
    users_id: number;


    constructor(id: number, status: number, finish_date: Date,
                enviroment_name: string, enviroment_block: string, enviroment_type_id: number, 
                audit_title: string, audit_initial_date: Date, audit_due_date: Date, 
                email: string, responsible_id: number, users_id: number){

        this.id = id;
        this.status = status;
        this.finish_date = finish_date;
        this.enviroment_name = enviroment_name;
        this.enviroment_block = enviroment_block;
        this.enviroment_type_id = enviroment_type_id;
        this.audit_title = audit_title;
        this.audit_initial_date = audit_initial_date;
        this.audit_due_date = audit_due_date;
        this.email = email;
        this.responsible_id = responsible_id;
        this.users_id = users_id;
    }
}