import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenerateActionPlanPage } from '../generate-action-plan/generate-action-plan';


/**
 * Generated class for the EvaluationStartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation-start',
  templateUrl: 'evaluation-start.html',
})
export class EvaluationStartPage {

  private mdThumbsUp = { color: 'DarkGray'};
  private mdThumbsDown = { color: 'DarkGray'};
  private index = 1;
  private evaluationList = [
    {
      question: "1 - O ambiente está devidamente limpo?",
      note: 0,
      description: ""
    },
    {
      question: "2 - O ambiente está devidamente organizado?",
      note: 0,
      description: ""
    },
    {
      question: "3 - Os objetos no ambiente são realmente úteis?",
      note: 0,
      description: ""
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluationStartPage');
  }

  @ViewChild('myInput') myInput: ElementRef;
  
  resize() {
    this.myInput.nativeElement.style.height = 'auto'
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }

  alternateColor(iconClick){
    
    if(iconClick == 'md-thumbs-up'){
      this.mdThumbsUp.color   = 'green';
      this.mdThumbsDown.color = 'DarkGray';
    }else{
      this.mdThumbsDown.color = 'red';
      this.mdThumbsUp.color   = 'DarkGray';
    }
  
  }

  goNext(){
    this.index++;
  }

  goPrevious(){
    this.index--;
  }

  viewActionPlan(){
    this.navCtrl.push(GenerateActionPlanPage);
  }
}
