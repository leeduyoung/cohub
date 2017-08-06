import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Device } from '@ionic-native/device'

import { TabsPage } from '../pages/tabs/tabs.ts';
import { HomePage } from '../pages/home/home.ts';
// import { ClubPage } from '../pages/club/club.ts';
import { RankPage } from '../pages/rank/rank.ts';
import { EventPage } from '../pages/event/event.ts';
// import { OptionPage } from '../pages/option/option.ts';
import { NotifyPage } from '../pages/notify/notify.ts';
import { ProfilePage } from '../pages/profile/profile.ts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpService } from '../providers/http-service.ts';
import { DataFactory } from '../providers/data-factory.ts';
import { UrlFactory } from '../providers/url-factory.ts';

import { BasicPage } from '../pages/template/tabbar/tabbar.ts';
import { TopTabsPage } from '../pages/template/tabbar/top-tabs.ts';

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
    BasicPage,
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
    BasicPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    DataFactory,
    UrlFactory,
    Device
  ]
})
export class AppModule {}
