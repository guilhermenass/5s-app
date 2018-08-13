import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  emailForgotPassword: string;
  constructor(
    public navCtrl: NavController, 
    public  authService: AuthServiceProvider, 
    public navParams: NavParams) {
  }

  forgotPassword() {
    this.authService.forgotPassword(this.emailForgotPassword).then((result) => {
      alert(true);
    }, (err) => {
     console.error(err)
    });
  }

}
