import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluateExecutionPage } from '../evaluate-execution/evaluate-execution';
import { EvaluationExecutionDto } from '../../dto/evaluation-execution-dto';

@IonicPage()
@Component({
  selector: 'page-evaluate-resume',
  templateUrl: 'evaluate-resume.html',
})
export class EvaluateResumePage {

  evaluation: EvaluationExecutionDto;
  isValidDate: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evaluation = navParams.get('evaluation');
  }

  ionViewDidLoad() {
    this.isValidDate = this.validateDate();
  }

  gotToEvaluateStart(){
    this.navCtrl.push(EvaluateExecutionPage,{evaluation: this.evaluation});
  }

  validateDate(): boolean{
    let date1 = new Date();
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);

    let year = this.evaluation.audit_initial_date.substring(0,4);
    let month = this.evaluation.audit_initial_date.substring(5,7);
    let day = this.evaluation.audit_initial_date.substring(8,10);
 
    let date2 = new Date(parseInt(year), parseInt(month) -1, parseInt(day),0,0,0,0);
    if(date1 >= date2){
      return true;
    }
    return false;
  }
}
