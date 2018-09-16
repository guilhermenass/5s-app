import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluateResumePage } from './evaluate-resume';

@NgModule({
  declarations: [
    EvaluateResumePage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluateResumePage),
  ],
})
export class EvaluateResumePageModule {}
