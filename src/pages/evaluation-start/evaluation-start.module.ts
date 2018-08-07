import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluationStartPage } from './evaluation-start';

@NgModule({
  declarations: [
    EvaluationStartPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluationStartPage),
  ],
})
export class EvaluationStartPageModule {}
