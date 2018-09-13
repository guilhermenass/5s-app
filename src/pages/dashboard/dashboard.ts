import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluateResumePage } from '../evaluate-resume/evaluate-resume'
import { EvaluateServiceProvider } from '../../providers/evaluate-service';
import { NativeStorage } from '@ionic-native/native-storage';
import { Evaluate } from '../../model/evaluate';
import { Enviroment } from '../../model/enviroment';
import { User } from '../../model/user';
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
  evaluates: Evaluate[];
  pending: Evaluate[] = new Array<Evaluate>();
  delayed: Evaluate[] = new Array<Evaluate>();
  concluded: Evaluate[] = new Array<Evaluate>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public evaluateService: EvaluateServiceProvider,
              private nativeStorage: NativeStorage) {}

  showEvaluatesSuccess = false;
  showEvaluatesDelayed = false;
  showEvaluatesPending = false;

  goToEvaluateResume(evaluate: Evaluate){
    this.navCtrl.push(EvaluateResumePage,{evaluate:evaluate});
  }

  ionViewDidLoad() {
    this.evaluateService.search().subscribe(x => {
      this.evaluates = x;
      this.evaluates.forEach(evaluate =>{
        if(evaluate.status.includes('CONCLUIDA')){
          this.concluded.push(evaluate);
        }else if(evaluate.status == "ATRASADA" ){
          this.delayed.push(evaluate)
        } else {
          this.pending.push(evaluate);
        }
      });
    });

    this.nativeStorage.getItem('token')
    .then(
      data =>
      error => console.error(error)
    );
    this.pending.push(new Evaluate(1,
                                   new Enviroment(36,'C','',36,'Teste',1,1),
                                   new Audit(1,'Auditoria Setembro','PENDENTE', new Date(), new Date(),''),
                                   new Date(),
                                   'PENDENTE',
                                   new User()));
    console.log('ionViewDidLoad DashboardPage',this.pending);
  }

  changeShowEvaluateSuccess(){
    if(!this.showEvaluatesSuccess){
      this.showEvaluatesSuccess = true;
      this.showEvaluatesDelayed = false;
      this.showEvaluatesPending = false;
    } else {
      this.showEvaluatesSuccess = false;      
    }
  }

  changeShowEvaluateDelayed(){
    if(!this.showEvaluatesDelayed){
      this.showEvaluatesDelayed = true;
      this.showEvaluatesSuccess = false;
      this.showEvaluatesPending = false;
    } else {
      this.showEvaluatesDelayed = false;      
    }
  }

  changeShowEvaluatePending(){
    if(!this.showEvaluatesPending){
      this.showEvaluatesPending = true;
      this.showEvaluatesDelayed = false;
      this.showEvaluatesSuccess = false;
    } else {
      this.showEvaluatesPending = false;      
    }
  }

}
