import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluateResumePage } from '../evaluate-resume/evaluate-resume'
import { EvaluateServiceProvider } from '../../providers/evaluate-service';
import { Evaluate } from '../../model/evaluate';
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
  
  evaluates: EvaluationExecutionDto[];
  pending: EvaluationExecutionDto[] = new Array<EvaluationExecutionDto>();
  delayed: EvaluationExecutionDto[] = new Array<EvaluationExecutionDto>();
  completed: EvaluationExecutionDto[] = new Array<EvaluationExecutionDto>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public evaluateService: EvaluateServiceProvider) {}

  showEvaluatesSuccess = false;
  showEvaluatesDelayed = false;
  showEvaluatesPending = false;

  goToEvaluateResume(evaluation: Evaluate){
    this.navCtrl.push(EvaluateResumePage,{evaluation:evaluation});
  }

  ionViewDidLoad() {
    this.init();
  }

  init(){
    this.evaluateService.searchAppraiser().subscribe(x => {
      this.evaluates = x;
      this.evaluates.forEach(evaluate =>{
        if(evaluate.status === 2){
          this.completed.push(evaluate);
        }else if(new Date(evaluate.audit_due_date) >= new Date()){
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
