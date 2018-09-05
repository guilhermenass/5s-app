export class AuditAnswer {
    private id: number; 
    private audits_id: number;
    private created_date: Date;
    private question_id: number;

    constructor(id: number, audits_id: number,
        created_date: Date, question_id: number) {
                    
    this.id = id;
    this.audits_id = audits_id;
    this.created_date = created_date;
    this.question_id = question_id;
    }
  }
