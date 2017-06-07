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

    // var headers = new Headers();
    // headers.append('Authorization', Bearer ' + this.token);
    // var options = new RequestOptions({headers: headers});
    // this.http.get("http://www.dogether.co.kr/api/trainer/list/0")
    // .map(
    //   res => res.json()
    // )
    // .subscribe(
    //   data => this.product = data,
    //   err => this.status.error = err
    // );

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Content-Type', 'application/json');
    var payload: any = {
      grant_type: 'password',
      username: 'tester@hnblife.co.kr',
      password: 'gpftmzpdj105!',
      client_id: 'QpRokitgpFf8oNZRXaLhp2WbMBhg0fyD2IrcxBWW',
      client_secret: 'r1YjuDJWnqXde9RPuQpJgUlF6ELEuJ3UA6ISo7qdEhSzK2Era5wR2LHfkuRPcqupq8znFT3RG5jYzm5Kh20JyMCN9bvrxT0efvxIzUzGJOZYZWmUzIHBSvcDDHGxaAiA'
    }

    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', 'tester@hnblife.co.kr');
    params.set('password', 'gpftmzpdj105!');
    params.set('client_id', 'QpRokitgpFf8oNZRXaLhp2WbMBhg0fyD2IrcxBWW');
    params.set('client_secret', 'r1YjuDJWnqXde9RPuQpJgUlF6ELEuJ3UA6ISo7qdEhSzK2Era5wR2LHfkuRPcqupq8znFT3RG5jYzm5Kh20JyMCN9bvrxT0efvxIzUzGJOZYZWmUzIHBSvcDDHGxaAiA');

// let options = new RequestOptions({ headers: headers, params: params });
    // let result = this.http.post(this.baseUrl + '/v2/o/token/', {search: params}, headers).map(res => res.json()).subscribe(data => {
    let result = this.http.post(this.baseUrl + '/v2/o/token/?grant_type=password&username=tester@hnblife.co.kr&password=gpftmzpdj105!&client_id=QpRokitgpFf8oNZRXaLhp2WbMBhg0fyD2IrcxBWW&client_secret=r1YjuDJWnqXde9RPuQpJgUlF6ELEuJ3UA6ISo7qdEhSzK2Era5wR2LHfkuRPcqupq8znFT3RG5jYzm5Kh20JyMCN9bvrxT0efvxIzUzGJOZYZWmUzIHBSvcDDHGxaAiA', headers).map(res => res.json()).subscribe(data => {
      // let result = this.http.post(this.baseUrl + '/v2/o/token/', options).map(res => res.json()).subscribe(data => {
      console.log(data);
    });
    console.log('result : ', result);
  }
}
// import { URLSearchParams } from "@angular/http"


// testRequest() {
//   let data = new URLSearchParams();
//   data.append('username', username);
//   data.append('password', password);

//   this.http
//     .post('/api', data)
//       .subscribe(data => {
//             alert('ok');
//       }, error => {
//           console.log(error.json());
//       });
// }

    // // 테스트
    //     const CLIENT_ID = 'QpRokitgpFf8oNZRXaLhp2WbMBhg0fyD2IrcxBWW';
    //     const CLIENT_SECRET = 'r1YjuDJWnqXde9RPuQpJgUlF6ELEuJ3UA6ISo7qdEhSzK2Era5wR2LHfkuRPcqupq8znFT3RG5jYzm5Kh20JyMCN9bvrxT0efvxIzUzGJOZYZWmUzIHBSvcDDHGxaAiA';

    //     //test
    //     function test() {
    //         return $http({
    //             method: 'GET',
    //             url: "http://www.dogether.co.kr/api/trainer/list/0"
    //         })
    //     }

    //     // 엑세스 토큰 요청
    //     function getApiAccessToken() {
    //         return $http({
    //             method: 'POST',
    //             url: UrlsFactory.getApiAccessToken,
    //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //             // data: "grant_type=password" + "&username=api@refreshclub.co.kr" + "&password=gpftmzpdj105!"  //실서버
    //             //     + "&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
    //             data: "grant_type=password" + "&username=tester@hnblife.co.kr" + "&password=gpftmzpdj105!"  //데모서버
    //                 + "&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET 
    //         });
    //     }

    // var host = 'http://apidev.refreshclub.co.kr';  //테스트 서버
    // getApiAccessToken: host + '/v2/o/token/',
