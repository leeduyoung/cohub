import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';

import { TabsPage } from '../pages/tabs/tabs';
// import { NetworkFactory } from '../providers/network-factory';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private device: Device, private network: Network) {
    console.log('app component constructor');
    
    console.log('platform : ', platform);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // console.log('Device info is: ' + this.device);
      // console.log('Device model is: ' + this.device.model);
      // console.log('Device version is: ' + this.device.version);
      // console.log('Device UUID is: ' + this.device.uuid);

      console.log('navigator : ', navigator);
      // console.log('networkFactory.isOnline() : ', networkFactory.isOnline());
    });
  }
}