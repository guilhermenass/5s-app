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

import { FinishEvaluatePage } from '../pages/finish-evaluate/finish-evaluate';
import { UserConfigPage } from '../pages/user-config/user-config';  
import { MainPage } from '../pages/main/main';

import { ExpandableComponent } from '../components/expandable/expandable'
import { TokenInterceptor } from '../providers/interceptor-token';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ConsumesApiProvider } from '../providers/consumes-api/consumes-api';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { NativeStorage } from '@ionic-native/native-storage';
import { QuestionServiceProvider } from '../providers/question-service';
import { AuditsPage } from '../pages/audits/audits';
import { EvaluateResumePage } from '../pages/evaluate-resume/evaluate-resume';
import { EvaluateExecutionPage } from '../pages/evaluate-execution/evaluate-execution';
import { EvaluateServiceProvider } from '../providers/evaluate-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    ResponsibleDashboardPage,
    FooterTabsPage,
    AuditsPage,
    EvaluateResumePage,
    EvaluateExecutionPage,
    FinishEvaluatePage,
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
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    
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
    EvaluateExecutionPage,
    UserConfigPage,
    UserProfilePage,
    EvaluateResumePage,
    FinishEvaluatePage,
    MainPage,
    ExpandableComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthServiceProvider,
    EvaluateServiceProvider,
    QuestionServiceProvider,
    ConsumesApiProvider,
    NativeStorage
  ]
})
export class AppModule {}
