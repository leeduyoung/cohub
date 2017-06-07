import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { HttpService } from '../../providers/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public httpService: HttpService) {

  }

  ngOnInit() {  
    console.log('ngOnInit started');
  }


  ionViewDidLoad() {
    console.log('ionic view did load');
    this.httpService.getTest();
    console.log('end');
  }

}
