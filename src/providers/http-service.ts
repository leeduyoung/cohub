import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { DataFactory } from './data-factory';
import { UrlFactory } from './url-factory';

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
  headers: Headers;

  constructor(public http: Http, public urlFactory: UrlFactory, public dataFactory: DataFactory) {
    console.log('Hello HttpService Provider');
  }

  getToken() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', 'tester@hnblife.co.kr');
    params.set('password', 'gpftmzpdj105!');
    params.set('client_id', 'QpRokitgpFf8oNZRXaLhp2WbMBhg0fyD2IrcxBWW');
    params.set('client_secret', 'r1YjuDJWnqXde9RPuQpJgUlF6ELEuJ3UA6ISo7qdEhSzK2Era5wR2LHfkuRPcqupq8znFT3RG5jYzm5Kh20JyMCN9bvrxT0efvxIzUzGJOZYZWmUzIHBSvcDDHGxaAiA');

    let body = params.toString();

    // console.log(this.urlFactory.getUrl().getApiAccessToken + '?' + body);
    // console.log(this.http.post(this.urlFactory.getUrl().getApiAccessToken + '?' + body, headers));
    // console.log(this.http.post("/v2/o/token/?" + body, headers).subscribe(res => {console.log(res)}));
    // console.log(this.http.post("/v2/o/token/?" + body, headers).map(res => res.json()));

    return this.http.post(this.urlFactory.getUrl().getApiAccessToken + '?' + body, headers)
      // return this.http.post("/v2/o/token/?" + body, headers)
      .map(res => res.json());
  }

  signIn() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer reNXiquHc5A5j4Y0WTMI6YVAqiqO0I');
    headers.append('Authorization', 'Bearer ' + this.dataFactory.getApiAccessToken());
    headers.append('X-DeviceUuid', 'DataFactory.getDeviceUuid()');
    // headers.append('X-DeviceUuid', this.dataFactory.getDeviceUuid());

    let memberInfo = {
      'umail': 'dy.lee@hnblife.co.kr',
      'upw': '1234qwer',
      'device_vendor': '<유저 디바이스 제조사>',
      'device_model': '<유저 디바이스 모델>'
    }

    let json = JSON.stringify(memberInfo);

    // return this.http.post(this.baseUrl + '/v2/accounts/signin', json, headers)
    return this.http.post(this.urlFactory.getUrl().accountsSignin, json, { headers: headers })
      .map(res => res.json());
  }

  login(id: String, password: String) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.urlFactory.getUrl2().login, JSON.stringify({ 'user_id': id, 'password': password }), { headers: headers })
      .map(res => res.json());
  }

  userFeedback() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer reNXiquHc5A5j4Y0WTMI6YVAqiqO0I');
    headers.append('Authorization', 'Bearer ' + this.dataFactory.getApiAccessToken());
    headers.append('X-DeviceUuid', 'DataFactory.getDeviceUuid()');
    // headers.append('X-DeviceUuid', DataFactory.getDeviceUuid());

    let data = {
      'contact': 'inquireInfo.contactInfo',
      'user_agent': 'inquireInfo.deviceModel',
      'content': 'inquireInfo.contents',
      'image': '',
    }

    let json = JSON.stringify(data);
    return this.http.post(this.urlFactory.getUrl().userFeedBack, json, { headers: headers })
      .map(res => res.json());
  }
}