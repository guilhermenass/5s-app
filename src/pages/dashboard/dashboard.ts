import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluateResumePage } from '../evaluate-resume/evaluate-resume'
import { EvaluateServiceProvider } from '../../providers/evaluate-service';
import { NativeStorage } from '@ionic-native/native-storage';
import { Evaluate } from '../../model/evaluate';
import { Enviroment } from '../../model/enviroment';
import { User } from '../../model/user';
import { Audit } from '../../model/audit';
import { EvaluationExecutionDto } from '../../dto/evaluation-execution-dto';

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
  evaluates: EvaluationExecutionDto[];
  pending: EvaluationExecutionDto[] = new Array<EvaluationExecutionDto>();
  delayed: EvaluationExecutionDto[] = new Array<EvaluationExecutionDto>();
  concluded: EvaluationExecutionDto[] = new Array<EvaluationExecutionDto>();

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
        if(evaluate.status === 1){
          this.concluded.push(evaluate);
        }else if(evaluate.status === 0){
          this.pending.push(evaluate)
        } else {
          this.delayed.push(evaluate);
        }
      });
    });
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
