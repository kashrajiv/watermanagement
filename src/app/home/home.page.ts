import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { QualityService } from '../services/QualityService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  apiData: any;

  timestamp: string[];
  phvalues: number[];


  constructor(private http: HttpClient) {
    this.fetchData();
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  fetchData() {
    while (true) {
      const myUrl = 'http://www.mocky.io/v2/5d28754a2c000066003eda63?mocky-delay=3000ms';
      this.http.get(myUrl).subscribe(data => {
        console.log(data);
        this.apiData = data;
        this.createBarChart();
      });
    }
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        // labels: this.apiData.labels,
        datasets: [{
          label: 'Viewers in millions',
          data: this.apiData.values,
          // backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0, 0, 0, 0)',
          borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
