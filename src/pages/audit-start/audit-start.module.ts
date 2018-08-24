import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditStartPage } from './audit-start';

@NgModule({
  declarations: [
    AuditStartPage,
  ],
  imports: [
    IonicPageModule.forChild(AuditStartPage),
  ],
})
export class AuditStartPageModule {}
