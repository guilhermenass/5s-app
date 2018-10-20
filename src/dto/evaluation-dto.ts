export class EvaluationDto {
    id: number;
    userEmail: string;

    constructor(id: number, userEmail: string) {
        this.id = id;
        this.userEmail = userEmail;
    }

}