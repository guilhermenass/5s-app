export class EvaluationExecutionDto {

    //Evaluation
    id: number;
    status: number;
    finish_date: Date;

    //Enviroment
    enviroment_name: string;
    enviroment_block: string;
    enviroment_type_id: number;
    enviroment_type_name: string;

    //Audit
    audit_title: string;
    audit_initial_date: Date;
    audit_due_date: Date;
    
    //User
    users_id: number;
    email: string;

    constructor(id: number, status: number, finish_date: Date,
                enviroment_name: string, enviroment_block: string, enviroment_type_id: number, enviroment_type_name: string,
                audit_title: string, audit_initial_date: Date, audit_due_date: Date, 
                users_id: number, email: string){

        this.id = id;
        this.status = status;
        this.finish_date = finish_date;

        this.enviroment_name = enviroment_name;
        this.enviroment_block = enviroment_block;
        this.enviroment_type_id = enviroment_type_id;
        this.enviroment_type_name = enviroment_type_name;

        this.audit_title = audit_title;
        this.audit_initial_date = audit_initial_date;
        this.audit_due_date = audit_due_date;

        this.users_id = users_id
        this.email = email;
    }
}