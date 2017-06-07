import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
  baseUrl: String;

  constructor(public http: Http) {
    console.log('Hello HttpService Provider');
    // this.baseUrl = 'http://apidev.refreshclub.co.kr';
    this.baseUrl = '';
  }

  getToken() {
    // let headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + this.token);
    // console.log(this.http.get("http://apidev.refreshclub.co.kr/v2/o/token/",{"Headers": headers}));
  }

  getTest() {
    console.log('getTest() called');
    console.log(this.http.get("http://www.dogether.co.kr/api/trainer/list/0"));

    console.log('second data');
    this.http.get("http://www.dogether.co.kr/api/trainer/list/0").subscribe(data => {
      console.log(data);
    });
    console.log('third data');
    this.http.get("http://www.dogether.co.kr/api/trainer/list/0").map(res => res.json())
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });

  }
}