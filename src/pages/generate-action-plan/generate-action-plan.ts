import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GenerateActionPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-action-plan',
  templateUrl: 'generate-action-plan.html',
})
export class GenerateActionPlanPage {

  public doughnutChartLabels:string[] = ['ATENDE', 'NÃO ATENDE'];
  public doughnutChartData:number[] = [2, 1];
  public doughnutChartType:string = 'doughnut';
  public chartColors: any[] = [{ backgroundColor:["green", "red"] }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateActionPlanPage');
  }


  // events
  public chartClicked(e:any):void {

  }

  public chartHovered(e:any):void {

  }
}
