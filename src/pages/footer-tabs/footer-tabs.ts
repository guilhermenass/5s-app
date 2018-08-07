import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { ResponsibleDashboardPage } from '../responsible-dashboard/responsible-dashboard';
import { UserConfigPage } from '../user-config/user-config'
import { User } from '../../model/user';
import { ProfileEnums } from '../../enums/profileEnums';

/**
 * Generated class for the FooterTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-footer-tabs',
  templateUrl: 'footer-tabs.html',
})
export class FooterTabsPage {

  getDashboardByProfile(){
    if( User.profile === 'avaliador'   ) { return DashboardPage;  }
    if( User.profile === 'responsavel' ) { return ResponsibleDashboardPage; }
  }

  dashBoardPage  = this.getDashboardByProfile();
  userConfigPage = UserConfigPage;
}
