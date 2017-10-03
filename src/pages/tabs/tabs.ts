import { Component } from '@angular/core';
import { ModalController, FabContainer } from 'ionic-angular';

import { HomePage } from '../home/home';
// import { ClubPage } from '../club/club';
import { RankPage } from '../rank/rank';
// import { EventPage } from '../event/event';
// import { OptionPage } from '../option/option';
import { NotifyPage } from '../notify/notify';
import { ProfilePage } from '../profile/profile';
import { ModalContentPage } from '../upload-modal/upload-modal';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { Device } from '@ionic-native/device';
import { Platform } from 'ionic-angular';

import { HttpService } from '../../providers/http-service';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RankPage;
  // tab3Root = EventPage;
  tab4Root = NotifyPage;
  tab5Root = ProfilePage;

  // private secureStorage: SecureStorage;

  constructor(public modalCtrl: ModalController, private device: Device, public platform: Platform, private secureStorage: SecureStorage, public httpService: HttpService) {
    // this.secureStorage = new SecureStorage();
    console.log('Device info is: ' + this.device);
    console.log('Device UUID is: ' + this.device.uuid);
    console.log('Device model is: ' + this.device.model);
    console.log('Device platform is: ' + this.device.platform);
  }

  ngOnInit() {
    console.log('TabsPage ngOnInit started');

    // todo: 자동 로그인 실시
    console.log(window);

    let id: String = 'test6@naver.com';
    let password: String = '1234qwer';

    if (this.platform.is('cordova')) {
      this.secureStorage.create('localSecureStorage')
        .then((storage: SecureStorageObject) => {

          let id:String;
          let password:String;

          storage.get('id')
            .then(
            data => {
              console.log('get key');
              console.log(data);
            },
            error => console.log(error)
            );

          storage.set('id', 'test6@naver.com')
            .then(
            data => {
              console.log('set id');
              console.log(data);
              id = data;
              return storage.set('password', '1234qwer');
            },
            error => console.log(error)
            )
            .then(
            data => {
              console.log('set password chain');
              console.log(data);
              password = data;
            },
            error => console.log(error)
            );

          storage.set('password', '1234qwer')
            .then(
            data => {
              console.log('set password');
              console.log(data);
              password = data;
            },
            error => console.log(error)
            );

          // storage.remove('key')
          //   .then(
          //   data => console.log(data),
          //   error => console.log(error)
          //   );

            this.httpService.login(id, password)
            .subscribe(
            data => {
              console.log('success to login');
              console.log(data);
            },
            error => {
              console.log(error);
            },
            () => {
              console.log('finished');
            });
        });
    }
    else {
      this.httpService.login(id, password)
        .subscribe(
        data => {
          console.log('success to login');
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('finished');
        });
    }

  }

  ionViewDidLoad() {
    console.log('TabsPage ionic view did load');
  }

  uploadModal(characterNum, fab: FabContainer) {

    console.log('Device info is: ' + this.device);
    console.log('Device UUID is: ' + this.device.uuid);

    // Check If Cordova/Mobile
    if (this.platform.is('cordova')) {
      console.log('1111'); // 모바일일 경우
      // window.location.href = url;
      this.autoSignin();
    } else {
      console.log('22222'); //웹일경우
      // window.open(url, '_blank');
    }


    fab.close();
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  autoSignin() {
    this.secureStorage.create('localSecureStorage')
    .then((storage: SecureStorageObject) => {

      let id:String;
      let password:String;

      storage.get('id')
        .then(
        data => {
          console.log('get key');
          console.log(data);
        },
        error => console.log(error)
        );

      storage.set('id', 'test6@naver.com')
        .then(
        data => {
          console.log('set id');
          console.log(data);
          id = data;
          return storage.set('password', '1234qwer');
        },
        error => console.log(error)
        )
        .then(
        data => {
          console.log('set password chain');
          console.log(data);
          password = data;
        },
        error => console.log(error)
        );

      storage.set('password', '1234qwer')
        .then(
        data => {
          console.log('set password');
          console.log(data);
          password = data;
        },
        error => console.log(error)
        );

      // storage.remove('key')
      //   .then(
      //   data => console.log(data),
      //   error => console.log(error)
      //   );

        this.httpService.login(id, password)
        .subscribe(
        data => {
          console.log('success to login');
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('finished');
        });
    });
  }
}
