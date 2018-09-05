import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuditResumePage } from '../audit-resume/audit-resume'
import { AuditServiceProvider } from '../../providers/audit-service';
import { NativeStorage } from '@ionic-native/native-storage';
import { Audit } from '../../model/audit';

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
  
  // private id: number;
  // private title: string;
  // private status: string; 
  // private createAt: Date;
  // private initialDate: Date;
  // private attachment: string;
  // private note: number;
  // private userId: number;
  // private endDate: Date;
  // private currentResponsible: number;
  audits: Audit[];
  pending: Audit[] = new Array<Audit>();
  delayed: Audit[] = new Array<Audit>();
  concluded: Audit[] = new Array<Audit>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public auditService: AuditServiceProvider,
              private nativeStorage: NativeStorage) {}

  showAuditsSuccess = false;
  showAuditsDelayed = false;
  showAuditsPending = false;

  goToAuditResume(audit: Audit){
    this.navCtrl.push(AuditResumePage,{audit:audit});
  }

  ionViewDidLoad() {
    this.auditService.search().subscribe(x => {
      this.audits = x;
      this.audits.forEach(audit =>{
        if(audit.status.includes('CONCLUIDA')){
          this.concluded.push(audit);
        }else if(audit.status == "ATRASADA" ){
          this.delayed.push(audit)
        } else {
          this.pending.push(audit);
        }
      });
    });
    this.nativeStorage.getItem('token')
      .then(
        data =>
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
