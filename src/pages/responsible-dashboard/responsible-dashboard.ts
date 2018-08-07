import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExecuteActionPlanPage} from '../execute-action-plan/execute-action-plan';

/**
 * Generated class for the ResponsibleDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-responsible-dashboard',
  templateUrl: 'responsible-dashboard.html',
})
export class ResponsibleDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponsibleDashboardPage');
  }

  goToExecuteActionPlan(){
    this.navCtrl.push(ExecuteActionPlanPage);
  }
}
