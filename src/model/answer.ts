export class Answer {
    private id: number;
    private questionId: number;
    private audit_id: number;
    
    constructor(questionId: number = null, auditId:number = null){
        this.questionId = questionId;
        this.audit_id = auditId;
    }
  }
