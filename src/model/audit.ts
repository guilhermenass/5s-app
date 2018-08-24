export class Audit {
    private id: number;
    private title: string;
    private status: string; 
    private createAt: Date;
    private initialDate: Date;
    private attachment: string;
    private note: number;
    private userId: number;
    private endDate: Date;
    private currentResponsible: number;

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
