export class UpdateEvaluationDto {
    status: number;
    userId: number;
    grade: number;

    constructor(status: number, userId: number, grade: number) {
        this.status = status;
        this.userId = userId;
        this.grade = grade;
    }
}