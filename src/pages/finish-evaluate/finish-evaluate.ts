import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Answer } from '../../model/answer';
import { Question } from '../../model/question';
import { EvaluateServiceProvider } from '../../providers/evaluate-service';
import { DashboardPage } from '../dashboard/dashboard';
import { EmailService } from '../../providers/email-service';
import { FinishEvaluationDto } from '../../dto/finish-evaluation-dto';
import { UpdateEvaluationDto } from '../../dto/update-evaluation-dto';

@IonicPage()
@Component({
  selector: 'page-finish-evaluate',
  templateUrl: 'finish-evaluate.html',
})
export class FinishEvaluatePage {

  answers: Array<Answer>;
  questions: Array<Question>;
  evaluationDto: FinishEvaluationDto;

  private readonly EVALUATION_SAVED_SUCCESSFUL = 'A avaliação foi concluída com sucesso';
  
  /**
   * variáveis usadas para fazer a contagem de conformidades e inconformidades
   */
  answerCompliance = 0;
  answerNonCompliance = 0;
  showDetailsQuestions: boolean = false;
  isFirstAvaliation: boolean = false;
  grade: number;
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

  ionViewDidLoad() {
    this.verifyEvaluationStatus(this.evaluationDto.evaluation.id);
  }

  verifyEvaluationStatus(evaluationId: number) {
    this.evaluateService.verifyEvaluationStatus(evaluationId)
    .subscribe(evaluation => {
      if(evaluation) {
        this.isFirstAvaliation = evaluation.grade == null ? true : false;
      }
    })
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
    let userId = this.getUserId(status);
    if(this.isFirstAvaliation) {
      this.grade = this.generateGrade();
    }
    let updateEvaluationDto = new UpdateEvaluationDto(status, userId, this.grade);
    this.evaluateService.updateEvaluation(this.evaluationDto.answers[0].evaluateId, updateEvaluationDto)
    .subscribe((res) => {
      this.presentAlert(res['message'])
      this.verifyEmail();
    });
  }

  getUserId(status: number): number {
    return status === 2 ? this.evaluationDto.evaluation.users_id : this.evaluationDto.evaluation.responsibleId
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

  generateGrade(): number {
    let questionsLength = this.evaluationDto.questions.length;
    let compliancesLength = this.answerCompliance;
    let grade = (compliancesLength / questionsLength * 10).toFixed(2);
    return Number(grade);
  }

  showDetailsQuestionsAnswers(){
    this.showDetailsQuestions = !this.showDetailsQuestions;
  }
}
