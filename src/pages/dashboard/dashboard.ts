import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'; 

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  @ViewChild('doughnutCanvas') doughnutCanvas ;
  doughnutChart: any ;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
          datasets: [{
              label: '# of Votes',
              data: [75,25],
              backgroundColor: [
                  'blue', 'white',      
              ],
              hoverBackgroundColor: [
                  'blue','white',
              ]
          }]
      },

  });


  }

  convertDate(){
    return new Date().toDateString();
    
  }

}
