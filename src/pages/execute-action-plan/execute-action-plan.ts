import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionServiceProvider } from '../../providers/question-service';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';
import { QuestionResponsible } from '../../model/questionResponsible';
import { EvaluationExecutionDto } from '../../dto/evaluation-execution-dto';
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

  /**Método responsável por finalizar a avaliação 
   * @param responsible_id no contexto de plano de ação é avaliador
  */
    finishEvaluate() {
      this.evaluateService.updateEvaluation(3, this.evaluation.id, this.evaluation.responsible_id)
        .subscribe((res) => {
          this.presentAlert(res['message'])
          this.verifyEmail(this.evaluation.email);
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

    verifyEmail(email: string) {
      this.emailService.sendRevaluationEmail(email)
      .subscribe(() => {})}
}
