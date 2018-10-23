export class Question {
  questions_id: number;
  title: string;
  description: string;

  constructor(questions_id?:number, title?: string, description?:string){
    this.questions_id = questions_id;
    this.title = title;
    this.description = description;
  }
}
