import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  constructor(public storage: Storage,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    this.resetData();
    this.userList = [];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  submit(){
    this.userList.push(this.user);
    console.log(this.userList);
    
     //code to save to local storage
    this.storage.set('USER',JSON.parse(JSON.stringify(this.user)));
    console.log(this.user);
    this.resetData();
   
   

    //back to previous page
    this.navCtrl.pop();
    let loader = this.loadingCtrl.create({
      content : "Please wait....",
      spinner:"circles",
      duration:3000 

    })

    loader.present();
  
    
    
  }

  resetData(){
    this.user = {
      name: null,
      imageURL: null,
      cash: null
    };
  }

}
