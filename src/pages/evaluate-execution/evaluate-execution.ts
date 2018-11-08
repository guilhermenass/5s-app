import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinishEvaluatePage } from '../finish-evaluate/finish-evaluate';
import { QuestionServiceProvider } from '../../providers/question-service';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';
import { EvaluationExecutionDto } from '../../dto/evaluation-execution-dto';
import { FinishEvaluationDto } from '../../dto/finish-evaluation-dto';
import { EvaluationDto } from '../../dto/evaluation-dto';

@IonicPage()
@Component({
  selector: 'page-evaluate-execution',
  templateUrl: 'evaluate-execution.html',
})
export class EvaluateExecutionPage {

  private evaluation: EvaluationExecutionDto;
  questions = new Array<Question>();
  answers = new Array<Answer>();

  private index = 0;

  constructor(public navCtrl: NavController,
              private questionService: QuestionServiceProvider,
              public navParams: NavParams) {
    this.evaluation = navParams.get('evaluation');
  }

  ionViewDidLoad() {
    if(this.evaluation.status === 0){
      this.questionService.findQuestionByEnvironmentTypeId(this.evaluation.enviroment_type_id).subscribe(x => {
        this.questions = x;
        x.forEach(question => {
          this.answers.push(new Answer(undefined, this.evaluation.id, question.id, question.title));
        })
      });
    }else {
      this.questionService.findQuestionsRevaluationByEvaluationId(this.evaluation.id).subscribe(x => {
        this.questions = x;
        x.forEach(question => {
          this.answers.push(new Answer( question['answerid'], this.evaluation.id, question.id, question.title));
        })
      });
    }
  }

  @ViewChild('myInput') myInput: ElementRef;
  
  resize() {
    this.myInput.nativeElement.style.height = 'auto'
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }

  goNext(questionId:number){
    this.index = questionId;
  }

  goPrevious(i:number){
    this.index = i;
  }

  finishEvaluate(){
    const finishEvaluationDto = new FinishEvaluationDto(
      this.answers,
      this.questions,
      new EvaluationDto(
        this.evaluation.id,
        this.evaluation.email,
        this.evaluation.status, 
        this.evaluation.responsible_id,
        this.evaluation.users_id
        )
      )
    this.navCtrl.push(FinishEvaluatePage, {evaluationDto: finishEvaluationDto});
  }
}
