import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Device } from '@ionic-native/device'

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ClubPage } from '../pages/club/club';
import { EventPage } from '../pages/event/event';
import { OptionPage } from '../pages/option/option';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpService } from '../providers/http-service';
import { DataFactory } from '../providers/data-factory';
import { UrlFactory } from '../providers/url-factory';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ClubPage,
    EventPage,
    OptionPage,
    ProfilePage,
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
    ClubPage,
    EventPage,
    OptionPage,
    ProfilePage
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
