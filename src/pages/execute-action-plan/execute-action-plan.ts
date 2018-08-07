import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExecuteActionPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-execute-action-plan',
  templateUrl: 'execute-action-plan.html',
})
export class ExecuteActionPlanPage {

  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {expanded: false},
      {expanded: false}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExecuteActionPlanPage');
  }

  expandItem(item){
    this.items.map((listItem) => {

        if(item == listItem){
            listItem.expanded = true;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    }); 
  }

}
