import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResponsibleDashboardPage } from '../responsible-dashboard/responsible-dashboard';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  typeProfile: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  selectTypeUser(){
    if(this.typeProfile == 1){
      this.navCtrl.push(DashboardPage);
    }else {
      this.navCtrl.push(ResponsibleDashboardPage);
    }
  }

}
