import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
/**
 * Generated class for the UserConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-config',
  templateUrl: 'user-config.html',
})
export class UserConfigPage {

  nameUser: string
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private storage: Storage,
              public app: App,
              private alertCtrl: AlertController) {

     this.storage.get('name').then((val: string) => {
      this.nameUser = val;
    });
  }

  logout(){
    this.storage.remove('token').then( () => {
      if(this.navCtrl.length() > 0){
        this.navCtrl.popAll(); 
      }
      this.app.getRootNavs()[0].setRoot(LoginPage);
    });
  }

  presentAlert(message?: string) {
    let alert = this.alertCtrl.create({
      title: 'Deseja realmente sair do sistema?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.logout();
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  }
}
