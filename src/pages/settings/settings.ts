import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  user:{email:string, password:string};
  company:{name:string, address:string};
  display: string;

  constructor(private alertCtrl: AlertController,public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.user = {email:"abc123@gmail.com", password:"abc123"} ;
    this.company = {name:"Company ABC",address:"Taman Wahyu"};
    this.storage.get('USER').then(data =>{
      if(data){
        this.user = data;
        this.company = data;
      }
      this.display = this.user.email;
      this.display = this.company.name;
    },err => {
  
      console.log('error',err) ;
    } 
  );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  save(){
    this.display = this.user.email ;
    this.display = this.user.password;
    this.display = this.company.name ;
    this.display = this.company.address;
    this.storage.set('USER',this.user).then(()=>{console.log('data saved');
    
  });
  this.storage.set('COMPANY',this.company).then(()=>{console.log('data saved');
    
  });

  let alert = this.alertCtrl.create({
    title: 'Message',
    subTitle: 'Your changes has been saved',
    buttons: ['Dismiss']
  });
  alert.present();
  
  }

}
