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

  showEvaluationsSuccess = false;
  showEvaluationsDelayed = false;
  showEvaluationsPending = false;

  goToEvaluationResume(){
    this.navCtrl.push(EvaluationResumePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  changeShowEvaluationSuccess(){
    if(!this.showEvaluationsSuccess){
      this.showEvaluationsSuccess = true;
      this.showEvaluationsDelayed = false;
      this.showEvaluationsPending = false;
    } else {
      this.showEvaluationsSuccess = false;      
    }
  }

  changeShowEvaluationDelayed(){
    if(!this.showEvaluationsDelayed){
      this.showEvaluationsDelayed = true;
      this.showEvaluationsSuccess = false;
      this.showEvaluationsPending = false;
    } else {
      this.showEvaluationsDelayed = false;      
    }
  }

  changeShowEvaluationPending(){
    if(!this.showEvaluationsPending){
      this.showEvaluationsPending = true;
      this.showEvaluationsDelayed = false;
      this.showEvaluationsSuccess = false;
    } else {
      this.showEvaluationsPending = false;      
    }
  }

}
