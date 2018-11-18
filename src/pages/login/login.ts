import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MainPage } from '../main/main';
import { User } from '../../model/user';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loading: any;
  private user = { email:'', password:'', profile:0 };
  private data: any;

  constructor(
    public  navCtrl    : NavController, 
    public  navParams  : NavParams,
    public  authService: AuthServiceProvider, 
    public  loadingCtrl: LoadingController, 
    private toastCtrl  : ToastController,
    private storage: Storage
  ) {}

  goToForgotPassWord(){
    this.navCtrl.push(ForgotPasswordPage);
  }

  doLogin() {
    this.showLoader();
    this.authService.login(this.user)
      .then(async (result) => 
      {
        
        this.loading.dismiss();
        this.data = result;
        User.profile = this.data.profile; 
        
        this.storage.set('token', this.data.token);
        this.navCtrl.push(MainPage);
      }, (err) => {
        this.loading.dismiss();     
        
        if(err._body.type == 'error'){
          this.presentToast('Falha ao se comunicar com o servidor');
          return false;
        }
        this.presentToast(err._body);
      });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Entrando...'
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
    });

    toast.present();
  }

  requestDashboard(){

  }

}
