export class EvaluationDto {
    id: number;
    status: number;
    userEmail: string;
    responsibleId: number;
    users_id: number;
    constructor(id: number, userEmail: string, status: number, responsibleId: number, users_id: number) {
        this.id = id;
        this.userEmail = userEmail;
        this.status = status;
        this.responsibleId = responsibleId;
        this.users_id = users_id;
    }

}