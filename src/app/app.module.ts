import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {ModalPage} from "../pages/modal/modal";


import { NativeAudio } from '@ionic-native/native-audio';
import {PortadaPage} from "../pages/portada/portada";
import {LoginPage} from "../pages/login/login";

export const firebaseConfig = {

  apiKey: "AIzaSyCcyN1LkVTISDlV9bNWJQjQFOENQS5AVBg",
  authDomain: "ionic3-46974.firebaseapp.com",
  databaseURL: "https://ionic3-46974.firebaseio.com",
  projectId: "ionic3-46974",
  storageBucket: "ionic3-46974.appspot.com",
  messagingSenderId: "1013093101878"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalPage,
    PortadaPage,
    LoginPage
      ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalPage,
    PortadaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeAudio
  ]
})
export class AppModule {}
