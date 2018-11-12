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
    return new Date().setUTCHours(0,0,0,0) >= new Date(this.evaluation.audit_initial_date).setUTCHours(0,0,0,0)
  }
}
