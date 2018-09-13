export class Audit {
     id: number;
     title: string;
     status: string; 
     initial_date: Date;
     due_date: Date;
     description: string;

    constructor(id: number, 
                title: string,
                status: string, 
                initial_date: Date,
                due_date: Date,
                description: string) {
                    
    this.id = id;
    this.title = title;
    this.status = status;
    this.initial_date = initial_date;
    this.due_date = due_date;
    this.description = description;
    
    }
  }
