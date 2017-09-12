import { Component } from '@angular/core';
import {LoadingController} from 'ionic-angular';

//import { HomePage } from '../pages/home/home';
import {PortadaPage} from "../pages/portada/portada";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage: any = PortadaPage;

  constructor(public loadingCtrl: LoadingController) {

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      this.rootPage = LoginPage;
      loading.dismiss();
    }, 3000);

  }



}
