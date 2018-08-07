import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluationResumePage } from '../evaluation-resume/evaluation-resume'

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class  DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToEvaluationResume(){
    this.navCtrl.push(EvaluationResumePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
