import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Answer } from '../../model/answer';
import { Question } from '../../model/question';
import { EvaluateServiceProvider } from '../../providers/evaluate-service';

/**
 * Generated class for the FinishEvaluatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishEvaluatePage');
  }


  // events
  public chartClicked(e:any):void {
    
  }

  public chartHovered(e:any):void {

  }

  generateActionPlan(){
    alert('inconformidades encontradas');
  }

  finishEvaluate(){
    alert('palavraaaa')
    this.evaluateService.finishEvaluate(this.evaluateId,this.answers);

  }
}
