import { Enviroment } from "./enviroment";

export class Audit {
     enviroment: Enviroment;
     id: number;
     title: string;
     status: string; 
     createAt: Date;
     initialDate: Date;
     attachment: string;
     note: number;
     userId: number;
     endDate: Date;
     currentResponsible: number;

    constructor(id: number, 
                title: string,
                status: string, 
                createAt: Date,
                initialDate: Date,
                attachment: string,
                note: number,
                userId: number,
                endDate: Date,
                currentResponsible: number) {
                    
    this.id = id;
    this.title = title;
    this.status = status;
    this.createAt = createAt;
    this.initialDate = initialDate;
    this.attachment = attachment;
    this.note = note;
    this.userId = userId;
    this.endDate = endDate;
    this.currentResponsible = currentResponsible;
    
    }
  }
