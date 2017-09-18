import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { HttpService } from '../../providers/http-service';
import { DataFactory } from '../../providers/data-factory';
import { UrlFactory } from '../../providers/url-factory';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  feed: string = "recent";

  constructor(public navCtrl: NavController, public httpService: HttpService, public dataFactory: DataFactory) {
    console.log('home page constructor');
  }

  ngOnInit() {
    console.log('ngOnInit started');
  }


  ionViewDidLoad() {
    console.log('ionic view did load');

    // this.httpService.getToken()
    //   .subscribe(
    //   data => {
    //     console.log(data);
    //     this.dataFactory.setApiAccessToken(data.access_token);
    //     console.log('1111', this.dataFactory.getApiAccessToken());
    //   },
    //   error => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('finished');
    //   });


    // this.httpService.signIn()
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('finished');
    //     });


    // this.httpService.userFeedback()
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('finished');
    //     });

  }

}

