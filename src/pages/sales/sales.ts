import { Component } from '@angular/core';
import { NavController,  NavParams } from 'ionic-angular';



@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html'
})
export class SalesPage {
 
 users: Array<any>;
 seniors : Array<any>;
 generals : Array<any>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.users = [{

      name : 'Jane Wall',
      cash : '$ 1000',
      imageURL : 'https://andersonstrathern.co.uk/uploads/images/ws_cropper/4_0x0_439x439_440x440_bruce_farquhar.jpg'
    },
    {
      name : 'Alice V.',
      cash : '$ 299',
      imageURL : 'https://andersonstrathern.co.uk/uploads/images/ws_cropper/4_0x0_440x440_440x440_anne_chapman.jpg'
    },

    {
      name : 'Alien J.',
      cash : '$ 50',
      imageURL : 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg' 
    },
    {
      name : 'Abu Razak',
      cash : '$ 180',
      imageURL : 'https://www.ait.ac.at/fileadmin/profile/bilder/Photo_723.jpg' 
    },

    {

    }
  
  ];

  this.seniors = [
    {

    name : 'John F.',
    jawatan : 'CEO',
    imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEp35r5gO-TT20q4tFKhpyHdmiOT20r5cdoB8jhbcfo2QMLAwGg'
  },
  {
    name : 'Abby S.',
    jawatan : 'V.P',
    imageURL : 'http://goldenbergnahmias.com/wp-content/uploads/2017/10/dan-profile.jpg'
  },
  {
    name : 'Lea Lee',
    jawatan : 'V.P',
    imageURL : 'https://www.psc.isr.umich.edu/img/people/profile/photo.php?i=10024993&s=200x300e&f=martha-j-bailey.jpg'
  },
  


];

this.generals = [
  {
   name : 'Alan Kadir',
   imageURL : 'https://southfloridanews11.com/wp-content/uploads/2018/04/Nicholas-Mastroianni-III.jpg' 
   
  },
  {
    name : 'Ariff Faizal',
    imageURL : 'http://static1.uk.businessinsider.com/image/56a53c21dd0895c5128b46b3-480/bluevine-ceo-eyal-lifshitz.jpg'
  },
  {
    name : 'Mazli Ibrahim',
    imageURL : 'https://www.victoria.ac.nz/images/staffpics/van-jackson.jpg'
  },
  {
    name : 'Ivan Divo',
    imageURL : 'https://media3.s-nbcnews.com/i/newscms/2017_30/2085121/marissaarmas_af10dfad87f857a65e129069b7808b47.jpg'
  },
  {

  }

 ];
    
    
  }

  pageProfile(){
    this.navCtrl.push('ProfilePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesPage');
  }
  
}
