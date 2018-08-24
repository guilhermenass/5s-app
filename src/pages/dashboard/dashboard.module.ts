import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';

@NgModule({
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
  declarations: [
    DashboardPage,
  ]
})
export class DashboardPageModule {}
