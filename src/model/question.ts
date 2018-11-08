export class Question {
  id: number;
  title: string;
  description: string;
  answerId: number;

  constructor(id?: number, title?: string, description?: string, answerId?: number){
    this.id = id;
    this.title = title;
    this.description = description;
    this.answerId = answerId;
  }
}
