import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuditStartPage } from '../audit-start/audit-start';
import { Audit } from '../../model/audit';

/**
 * Generated class for the AuditResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audit-resume',
  templateUrl: 'audit-resume.html',
})
export class AuditResumePage {

  audit: Audit;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.audit = navParams.get('audit');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditResumePage');
  }

  gotToAuditStart(){
    this.navCtrl.push(AuditStartPage,{audit:this.audit});
  }

}
