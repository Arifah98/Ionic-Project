import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})


export class AddPage {
  user: any;
  userList: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resetData();
    this.userList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  submit(){
    this.userList.push(this.user);
    console.log(this.userList);
    this.resetData();
    //code to save to local storage


    
    //back to previous page
    this.navCtrl.pop();
  }

  resetData(){
    this.user = {
      name: null,
      picture: null,
      cash: null
    };
  }

}
