export class Answer {
     id: number;
     questionId: number;
     status: boolean;
    
    constructor(questionId: number = null){
        this.questionId = questionId;
    }
  }
