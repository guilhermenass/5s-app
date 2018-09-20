export class Answer {
     id: number;
     evaluateId: number;
     questionId: number;
     status: boolean;
     comments: string;
    
    constructor(evaluateId: number, questionId: number){
      this.evaluateId = evaluateId;
      this.questionId = questionId;
    }
  }
