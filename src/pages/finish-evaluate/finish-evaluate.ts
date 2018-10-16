import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Answer } from '../../model/answer';
import { Question } from '../../model/question';
import { EvaluateServiceProvider } from '../../providers/evaluate-service';

@IonicPage()
@Component({
  selector: 'page-finish-evaluate',
  templateUrl: 'finish-evaluate.html',
})
export class FinishEvaluatePage {

  answers: Array<Answer>;
  questions: Array<Question>;
  evaluateId: number;

  /**
   * variáveis usadas para fazer a contagem de conformidades e inconformidades
   */
  answerCompliance = 0;
  answerNonCompliance = 0;
  

  public doughnutChartLabels:string[] = ['CONFORME', 'INCONFORME'];
  public doughnutChartData:number[] = [0,0];
  public doughnutChartType:string = 'doughnut';
  public chartColors: any[] = [{ backgroundColor:["green", "red"] }];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public evaluateService: EvaluateServiceProvider) {
    this.answers = navParams.get('answers');
    this.questions = navParams.get('questions');
    this.evaluateId = navParams.get('evaluateId')

    this.answers.forEach(answer =>
    { 
      if(answer.status){
        this.answerCompliance++;
      }else{
        this.answerNonCompliance++;
      }
    })
    this.doughnutChartData = [this.answerCompliance, this.answerNonCompliance];
  }

  generateActionPlan(){
    this.evaluateService.finishEvaluate(this.answers)
    .subscribe(res => {
    });
  }

  finishEvaluate(){
    this.evaluateService.finishEvaluate(this.answers)
    .subscribe(res => {
      //FIXME: Ajustar para não pegar a posição 0 fixa
      this.evaluateService.updateStatus(1, this.answers[0].evaluateId)
      .subscribe(res => {
      })
    });
  }
}
