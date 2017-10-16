import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Device } from '@ionic-native/device'
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { Network } from '@ionic-native/network';

import { TabsPage } from '../pages/tabs/tabs.ts';
import { HomePage } from '../pages/home/home.ts';
// import { ClubPage } from '../pages/club/club.ts';
import { RankPage } from '../pages/rank/rank.ts';
import { EventPage } from '../pages/event/event.ts';
// import { OptionPage } from '../pages/option/option.ts';
import { NotifyPage } from '../pages/notify/notify.ts';
import { ProfilePage } from '../pages/profile/profile.ts';
import { SignPage } from '../pages/sign/sign.ts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpService } from '../providers/http-service.ts';
import { DataFactory } from '../providers/data-factory.ts';
import { DataFactory2 } from '../providers/data-factory2.ts';
import { UrlFactory } from '../providers/url-factory.ts';
import { NetworkFactory } from '../providers/network-factory.ts';
import { Highlight } from '../template/highlight';
import { ChildCat } from '../template/child-cat/child-cat';
// import { ModalContentPage } from '../pages/event/event.ts';
import { ModalContentPage } from '../pages/upload-modal/upload-modal.ts';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    // ClubPage,
    RankPage,
    EventPage,
    // OptionPage,
    NotifyPage,
    ProfilePage,
    ModalContentPage,
    SignPage,
    Highlight,
    ChildCat,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    // ClubPage,
    RankPage,
    EventPage,
    // OptionPage,
    NotifyPage,
    ProfilePage,
    ModalContentPage,
    SignPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    DataFactory,
    DataFactory2,
    UrlFactory,
    NetworkFactory,
    Device,
    SecureStorage,
    Network,
  ]
})
export class AppModule {}
