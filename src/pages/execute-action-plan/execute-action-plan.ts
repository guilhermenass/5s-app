import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionServiceProvider } from '../../providers/question-service';
import { FinishEvaluationDto } from '../../dto/finish-evaluation-dto';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';
import { EvaluationDto } from '../../dto/evaluation-dto';
import { FinishEvaluatePage } from '../finish-evaluate/finish-evaluate';
import { QuestionResponsible } from '../../model/questionResponsible';
import { EvaluationExecutionDto } from '../../dto/evaluation-execution-dto';
import { FinishActionPlanPage } from '../finish-action-plan/finish-action-plan';
import { EvaluateServiceProvider } from '../../providers/evaluate-service';
import { EmailService } from '../../providers/email-service';
import { ResponsibleDashboardPage } from '../responsible-dashboard/responsible-dashboard';

@IonicPage()
@Component({
  selector: 'page-execute-action-plan',
  templateUrl: 'execute-action-plan.html',
})
export class ExecuteActionPlanPage {

  private readonly EVALUATION_SAVED_SUCCESSFUL = 'A avaliação foi concluída com sucesso';

  private evaluation: EvaluationExecutionDto;
  private index = -1;
  questionsResponsible = new Array<QuestionResponsible>();
  questions = new Array<Question>();
  answers = new Array<Answer>();

  constructor(public navCtrl: NavController,
    private questionService: QuestionServiceProvider,
    public evaluateService: EvaluateServiceProvider,
    public emailService: EmailService,
    public navParams: NavParams,
    private alertCtrl: AlertController) {
    this.evaluation = navParams.get('evaluation');
  }

  ionViewDidLoad() {
    this.load();
  }

  /** Método responsável por buscar no back-end as questões e o comentário do avaliador em cada questão não conforme */
  load() {
    this.questionService.findNonCompliancesByEvaluationId(this.evaluation.id).subscribe(x => {
      this.questionsResponsible = x;
      // x.forEach(question => {
      //   this.answers.push(new Answer(this.evaluation.id, question.id, question.title, question.comments));
      // });
    });
  }

  /**Método responsável por expandir e exibir o comentário do avaliador na questão selecionada*/
  expandNonCompliance(questionId: number) {
    if (this.index != questionId) {
      this.index = questionId;
    } else {
      this.index = -1;
    }
  }

  /**Método responsável por finalizar a avaliaçã */
    finishEvaluate() {
      this.evaluateService.updateEvaluation(3, this.evaluation.id)
        .subscribe((res) => {
          this.presentAlert(res['message'])
          //    this.verifyEmail();
        });
    }

  presentAlert(message?: string) {
    let alert = this.alertCtrl.create({
      title: 'Avaliação Finalizada',
      subTitle: message ? message : this.EVALUATION_SAVED_SUCCESSFUL,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(ResponsibleDashboardPage);
          }
        }
      ]
    });
    alert.present();
  }

    /*
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
  */
}
