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

  evaluate: EvaluationExecutionDto;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evaluate = navParams.get('evaluate');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluateResumePage');
  }

  gotToEvaluateStart(){
    this.navCtrl.push(EvaluateExecutionPage,{evaluate:this.evaluate});
  }

}
