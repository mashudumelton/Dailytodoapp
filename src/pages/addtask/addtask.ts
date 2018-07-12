import { PEOPLE } from './../../mocks/task.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtask',
  templateUrl: 'addtask.html',
})

export class AddtaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
hobby1:string;
hobby2:string;
hobby3:string;
hobby4:string;
hobby5:string;

PEOPLE
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');
  }
  onClick1(){
     
     PEOPLE.push({hobby1:this.hobby1,hobby2:this.hobby2,hobby3:this.hobby3,hobby4:this.hobby4,hobby5:this.hobby5})
    
    this.navCtrl.pop()
  }
}
