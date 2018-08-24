import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule  } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ResponsibleDashboardPage } from '../pages/responsible-dashboard/responsible-dashboard';
import { ExecuteActionPlanPage } from '../pages/execute-action-plan/execute-action-plan';
import { FooterTabsPage } from '../pages/footer-tabs/footer-tabs';
import { AuditsPage } from '../pages/audits/audits';
import { AuditResumePage } from '../pages/audit-resume/audit-resume'
import { AuditStartPage } from '../pages/audit-start/audit-start';
import { GenerateActionPlanPage } from '../pages/generate-action-plan/generate-action-plan';
import { UserConfigPage } from '../pages/user-config/user-config';  
import { MainPage } from '../pages/main/main';

import { ExpandableComponent } from '../components/expandable/expandable'

import { ConsumesApiProvider } from '../providers/consumes-api/consumes-api';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { AuditServiceProvider } from '../providers/audit-service';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    ResponsibleDashboardPage,
    FooterTabsPage,
    AuditsPage,
    AuditResumePage,
    AuditStartPage,
    GenerateActionPlanPage,
    ExecuteActionPlanPage,
    UserConfigPage,
    UserProfilePage,
    MainPage,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage,
    ResponsibleDashboardPage,
    ExecuteActionPlanPage,
    FooterTabsPage,
    AuditsPage,
    AuditStartPage,
    UserConfigPage,
    UserProfilePage,
    AuditResumePage,
    GenerateActionPlanPage,
    MainPage,
    ExpandableComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AuditServiceProvider,
    ConsumesApiProvider,
    NativeStorage
  ]
})
export class AppModule {}
