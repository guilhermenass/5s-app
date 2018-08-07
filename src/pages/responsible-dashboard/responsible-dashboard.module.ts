import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponsibleDashboardPage } from './responsible-dashboard';

@NgModule({
  declarations: [
    ResponsibleDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ResponsibleDashboardPage),
  ],
})
export class ResponsibleDashboardPageModule {}
