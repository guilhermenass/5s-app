import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenerateActionPlanPage } from '../generate-action-plan/generate-action-plan';
import { QuestionServiceProvider } from '../../providers/question-service';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';
import { Evaluate } from '../../model/evaluate';

/**
 * Generated class for the EvaluateExecutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluate-execution',
  templateUrl: 'evaluate-execution.html',
})
export class EvaluateExecutionPage {

  private evaluate: Evaluate;
  questions = new Array<Question>();
  answers = new Array<Answer>();

  private mdThumbsUp = { color: 'DarkGray'};
  private mdThumbsDown = { color: 'DarkGray'};
  private index = 0;

  constructor(public navCtrl: NavController,
              private questionService: QuestionServiceProvider,
              public navParams: NavParams) {
    this.evaluate = navParams.get('evaluate');
  }

  ionViewDidLoad() {
    this.questionService.findQuestionByEnvironmentTypeId(this.evaluate.enviroment.enviroment_types_id).subscribe(x => {
      this.questions = x;
      x.forEach(question => {
        this.answers.push(new Answer(question.questions_id));
      })
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

  viewActionPlan(){
    this.navCtrl.push(GenerateActionPlanPage, {answers:this.answers,questions: this.questions} );
  }
}