import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluationStartPage } from '../evaluation-start/evaluation-start';

/**
 * Generated class for the EvaluationResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation-resume',
  templateUrl: 'evaluation-resume.html',
})
export class EvaluationResumePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluationResumePage');
  }

  gotToEvaluationStart(){
      this.navCtrl.push(EvaluationStartPage);
  }

}
