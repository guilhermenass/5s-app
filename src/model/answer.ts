export class Answer {
     id: number;
     evaluateId: number;
     questionId: number;
     questionTitle: string;
     status: boolean;
     comments: string;
    
    constructor(evaluateId: number, questionId: number, questionTitle: string, comments: string = null){
      this.evaluateId = evaluateId;
      this.questionId = questionId;
      this.questionTitle = questionTitle;
      this.comments = comments;
    }
  }
