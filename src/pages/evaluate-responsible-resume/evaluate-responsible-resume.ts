import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluateExecutionPage } from '../evaluate-execution/evaluate-execution';
import { EvaluationExecutionDto } from '../../dto/evaluation-execution-dto';
import { FinishEvaluationDto } from '../../dto/finish-evaluation-dto';
import { ExecuteActionPlanPage } from '../execute-action-plan/execute-action-plan';

@IonicPage()
@Component({
  selector: 'page-evaluate-responsible-resume',
  templateUrl: 'evaluate-responsible-resume.html',
})
export class EvaluateResponsibleResumePage {

  evaluation: FinishEvaluationDto;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evaluation = navParams.get('evaluation');
  }

  gotToEvaluateStart(){
    this.navCtrl.push(ExecuteActionPlanPage,{evaluation: this.evaluation});
  }

}
