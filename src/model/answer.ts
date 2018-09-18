export class Answer {
     id: number;
     evaluateId: number;
     questionId: number;
     status: boolean;
    
    constructor(evaluateId:number, questionId: number = null){
      this.evaluateId = evaluateId;
      this.questionId = questionId;
    }
  }
