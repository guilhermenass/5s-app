import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditsPage } from './audits';

@NgModule({
  declarations: [
    AuditsPage,
  ],
  imports: [
    IonicPageModule.forChild(AuditsPage),
  ],
})
export class AuditsPageModule {}
