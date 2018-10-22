export class Question {
  questions_id: number;
  title: string;
  description: string;

  constructor(questionId?: number, title?: string, description?: string){
    this.questions_id = questionId;
    this.title = title;
    this.description = description;
  }
}
