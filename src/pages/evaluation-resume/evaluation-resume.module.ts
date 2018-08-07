import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluationResumePage } from './evaluation-resume';

@NgModule({
  declarations: [
    EvaluationResumePage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluationResumePage),
  ],
})
export class EvaluationResumePageModule {}
