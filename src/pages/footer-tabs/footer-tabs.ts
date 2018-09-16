import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { ResponsibleDashboardPage } from '../responsible-dashboard/responsible-dashboard';
import { UserConfigPage } from '../user-config/user-config'
import { User } from '../../model/user';
import { UserProfilePage } from '../user-profile/user-profile';

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

    switch(User.profile) {
      case 2:
        return DashboardPage;

      case 3:
        return DashboardPage;

      case 4:
        return ResponsibleDashboardPage;
      
      case 5:
        return ResponsibleDashboardPage;

      case 6:
        return UserProfilePage;

      default:
        return UserProfilePage;
    }
  }

  dashBoardPage  = this.getDashboardByProfile();
  userConfigPage = UserConfigPage;
}
