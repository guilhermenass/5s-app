import { Answer } from "./answer";

export class Inspection {
     id: number;
     audit_id: number;
     enviromentId: number;
     created_date: Date;
     answer: Array<Answer>
    
    constructor(id:number, audit_id: number, created_date:Date){
        this.audit_id = audit_id;
        this.created_date = created_date;
    }
  }
