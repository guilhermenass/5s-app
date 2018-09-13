import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluateExecutionPage } from '../evaluate-execution/evaluate-execution';
import { Evaluate } from '../../model/evaluate';

/**
 * Generated class for the EvaluateResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluate-resume',
  templateUrl: 'evaluate-resume.html',
})
export class EvaluateResumePage {

  evaluate: Evaluate;
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
