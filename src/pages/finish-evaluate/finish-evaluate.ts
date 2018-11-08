import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Answer } from '../../model/answer';
import { Question } from '../../model/question';
import { EvaluateServiceProvider } from '../../providers/evaluate-service';
import { DashboardPage } from '../dashboard/dashboard';
import { EmailService } from '../../providers/email-service';
import { FinishEvaluationDto } from '../../dto/finish-evaluation-dto';

@IonicPage()
@Component({
  selector: 'page-finish-evaluate',
  templateUrl: 'finish-evaluate.html',
})
export class FinishEvaluatePage {

  answers: Array<Answer>;
  questions: Array<Question>;
  evaluateId: number;

  evaluationDto: FinishEvaluationDto;

  private readonly EVALUATION_SAVED_SUCCESSFUL = 'A avaliação foi concluída com sucesso';
  
  /**
   * variáveis usadas para fazer a contagem de conformidades e inconformidades
   */
  answerCompliance = 0;
  answerNonCompliance = 0;
  
  showDetailsQuestions: boolean = false;
  
  public doughnutChartLabels:string[] = ['Conforme', 'Não conforme'];
  public doughnutChartData:number[] = [0,0];
  public doughnutChartType:string = 'doughnut';
  public chartColors: any[] = [{ backgroundColor:["green", "red"] }];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public evaluateService: EvaluateServiceProvider,
              public emailService: EmailService,
              private alertCtrl: AlertController) {

    this.evaluationDto = this.navParams.get('evaluationDto');

    this.answers = this.evaluationDto.answers;
    this.questions = this.evaluationDto.questions;
    
    this.evaluationDto.answers.forEach(answer =>
    { 
      if(answer.status){
        this.answerCompliance++;
      }else{
        this.answerNonCompliance++;
      }
    });

    this.doughnutChartData = [this.answerCompliance, this.answerNonCompliance];
  }

  finishEvaluate(){
    if(this.evaluationDto.evaluation.status === 0){
      this.evaluateService.finishEvaluate(this.evaluationDto.answers)
        .subscribe(() => {
          if(this.answerNonCompliance > 0) 
            this.updateEvaluation(1);
          else
            this.updateEvaluation(2);
        });
    } else {
      this.evaluateService.updateAnswersEvaluate(this.evaluationDto.answers)
      .subscribe(() => {
        if(this.answerNonCompliance > 0) 
          this.updateEvaluation(1);
        else
          this.updateEvaluation(2);
      });
    }
  }

  updateEvaluation(status) {
    this.evaluateService.updateEvaluation(status, this.evaluationDto.answers[0].evaluateId)
      .subscribe((res) => {
        this.presentAlert(res['message'])
        this.verifyEmail();
      })
  }

  verifyEmail() {
    if(this.answerNonCompliance > 0) {
      this.emailService.sendEmailWithNonCompliances({
        email: this.evaluationDto.evaluation.userEmail,
        nonCompliances: this.evaluationDto.answers.filter(x => {
          return x.status == false
        })
      }).subscribe(() => {})
    } else
      this.emailService.sendEmailSuccessfulEvaluation(this.evaluationDto.evaluation.userEmail).subscribe(() => {});
  }

  presentAlert(message?: string) {
    let alert = this.alertCtrl.create({
      title: 'Avaliação Finalizada',
      subTitle: message ? message : this.EVALUATION_SAVED_SUCCESSFUL,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(DashboardPage);
          }
        }
      ]
    });
    alert.present();
  }

  showDetailsQuestionsAnswers(){
    this.showDetailsQuestions = !this.showDetailsQuestions;
  }
}
