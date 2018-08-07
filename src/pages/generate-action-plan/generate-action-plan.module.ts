import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateActionPlanPage } from './generate-action-plan';

@NgModule({
  declarations: [
    GenerateActionPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(GenerateActionPlanPage),
  ],
})
export class GenerateActionPlanPageModule {}
