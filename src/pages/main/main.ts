import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FooterTabsPage } from '../footer-tabs/footer-tabs';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  footerTabs = FooterTabsPage;
}
