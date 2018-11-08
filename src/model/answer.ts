export class Answer {
     id: number;
     evaluateId: number;
     questionId: number;
     questionTitle: string;
     status: boolean;
     comments: string;
    
     constructor(answerId: number, evaluateId: number, questionId: number, questionTitle: string, comments: string = null){
      console.log('answerId',answerId)
      this.evaluateId = evaluateId;
      this.questionId = questionId;
      this.questionTitle = questionTitle;
      this.comments = comments;
      this.id = answerId;
    }
  }
