import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditResumePage } from './audit-resume';

@NgModule({
  declarations: [
    AuditResumePage,
  ],
  imports: [
    IonicPageModule.forChild(AuditResumePage),
  ],
})
export class AuditResumePageModule {}
