import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Answer } from '../../model/answer';
import { Question } from '../../model/question';

/**
 * Generated class for the GenerateActionPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-action-plan',
  templateUrl: 'generate-action-plan.html',
})
export class GenerateActionPlanPage {

  answers: Array<Answer>;
  questions: Array<Question>;

  answerNonCompliance = 0;
  answerCompliance = 0;
  

  public doughnutChartLabels:string[] = ['CONFORME', 'INCONFORME'];
  public doughnutChartData:number[] = [0,0];
  public doughnutChartType:string = 'doughnut';
  public chartColors: any[] = [{ backgroundColor:["green", "red"] }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.answers = navParams.get('answers');
    this.questions = navParams.get('questions');

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
    console.log('ionViewDidLoad GenerateActionPlanPage');
  }


  // events
  public chartClicked(e:any):void {

  }

  public chartHovered(e:any):void {

  }
}
