import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuditResumePage } from '../audit-resume/audit-resume'
import { AuditServiceProvider } from '../../providers/audit-service';
import { NativeStorage } from '@ionic-native/native-storage';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public auditService: AuditServiceProvider,
              private nativeStorage: NativeStorage) {}

  showAuditsSuccess = false;
  showAuditsDelayed = false;
  showAuditsPending = false;

  goToAuditResume(){
    this.navCtrl.push(AuditResumePage);
  }

  ionViewDidLoad() {
    // this.auditService.search().subscribe(x => {
    //   console.log('xxxx',x);
    // });
    this.nativeStorage.getItem('myitem')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
    console.log('ionViewDidLoad DashboardPage');
  }

  changeShowAuditSuccess(){
    if(!this.showAuditsSuccess){
      this.showAuditsSuccess = true;
      this.showAuditsDelayed = false;
      this.showAuditsPending = false;
    } else {
      this.showAuditsSuccess = false;      
    }
  }

  changeShowAuditDelayed(){
    if(!this.showAuditsDelayed){
      this.showAuditsDelayed = true;
      this.showAuditsSuccess = false;
      this.showAuditsPending = false;
    } else {
      this.showAuditsDelayed = false;      
    }
  }

  changeShowAuditPending(){
    if(!this.showAuditsPending){
      this.showAuditsPending = true;
      this.showAuditsDelayed = false;
      this.showAuditsSuccess = false;
    } else {
      this.showAuditsPending = false;      
    }
  }

}
