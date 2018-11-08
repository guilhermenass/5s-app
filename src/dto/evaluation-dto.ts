export class EvaluationDto {
    id: number;
    status: number;
    userEmail: string;

    constructor(id: number, userEmail: string, status: number) {
        this.id = id;
        this.userEmail = userEmail;
        this.status = status;
    }

}