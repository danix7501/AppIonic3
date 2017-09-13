import { Component } from '@angular/core';
import {NavController, ModalController, ViewController, NavParams} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {ModalPage} from "../modal/modal";
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:FirebaseListObservable<any[]>;
  parametro: any;

  constructor(public navCtrl: NavController,
              afDB: AngularFireDatabase,
              public modalCtrl: ModalController,
              public nativeAudio: NativeAudio,
              private viewCtrl: ViewController,
              public navParams: NavParams) {
    this.items = afDB.list('/vengadores');
    this.nativeAudio.preloadSimple('Id1','assets/audio/ironman.mp3');
    this.nativeAudio.preloadSimple('Id2','assets/audio/thor.mp3');
    this.nativeAudio.preloadSimple('Id3','assets/audio/hulk.mp3');
    this.nativeAudio.preloadSimple('Id4','assets/audio/blackpanther.mp3');
    this.nativeAudio.preloadSimple('Id5','assets/audio/spiderman.mp3');
    this.parametro = this.navParams.get('parametro');

    console.log(this.parametro);

  }

  imagen(img){
    //console.log(img);

    let imagen = {image: img}
    let modal = this.modalCtrl.create(ModalPage,imagen);
    modal.present();

    if (img == 1){
      this.nativeAudio.play('Id1');
    }
    if (img == 2){
      this.nativeAudio.play('Id2');
    }
    if (img == 3){
      this.nativeAudio.play('Id3');
    }
    if (img == 4){
      this.nativeAudio.play('Id4');
    }
    if (img == 5){
      this.nativeAudio.play('Id5');
    }

  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  signOut(){

    this.parametro.auth.signOut();
    this.navCtrl.pop();
  }

}

