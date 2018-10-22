import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionServiceProvider } from '../../providers/question-service';
import { FinishEvaluationDto } from '../../dto/finish-evaluation-dto';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';
import { EvaluationDto } from '../../dto/evaluation-dto';
import { FinishEvaluatePage } from '../finish-evaluate/finish-evaluate';
import { QuestionResponsible } from '../../model/questionResponsible';

/**
 * Generated class for the ExecuteActionPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-execute-action-plan',
  templateUrl: 'execute-action-plan.html',
})
export class ExecuteActionPlanPage {

  private evaluation: FinishEvaluationDto;
  questionsResponsible = new Array<QuestionResponsible>();
  questions = new Array<Question>();
  answers = new Array<Answer>();

  private index = 0;

  constructor(public navCtrl: NavController,
              private questionService: QuestionServiceProvider,
              public navParams: NavParams) {
    this.evaluation = navParams.get('evaluation');
  }

  ionViewDidLoad() {
   this.load();
  }

  load(){
    this.questionService.findNonCompliancesByEvaluationId(this.evaluation['id']).subscribe(x => {
      this.questionsResponsible = x;
      x.forEach(question => {
        this.answers.push(new Answer(this.evaluation['id'], question.id, question['Question'].title, question.comments));
        console.log('answerssss', this.answers);
      });
    });
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

  mapperQuestionResponsibleToQuestion(questionResponsible: Array<QuestionResponsible>): Array<Question>{
    let questions;
    this.questionsResponsible.forEach(questionResponsible => {
      questions.push(new Question(questionResponsible.id, questionResponsible.title));
    })
    return questions;
  }

  finishEvaluate(){
    this.questions = this.mapperQuestionResponsibleToQuestion(this.questionsResponsible);
    const finishEvaluationDto = new FinishEvaluationDto(
      this.answers,
      this.questions,
      new EvaluationDto(
        this.evaluation['id'],
        this.evaluation['email']
        )
      )
    this.navCtrl.push(FinishEvaluatePage, {evaluationDto: finishEvaluationDto});
  }


}
