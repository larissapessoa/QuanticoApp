import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular'; 
  
import {NavParams } from '@ionic/angular';

import { User } from 'src/app/models/user'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loading: any;
  user = {} as User;
  constructor(

    private router: Router,
    private platform: Platform,
    private google:GooglePlus,
    public loadingController: LoadingController,
    //private fireAuth: AngularFireAuth,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
   // public navParams: NavParams

  ) { }

 
  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }

  async presentLoading(loading) {
    await loading.present();
  }

  

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.navigateRoot('LoginPage');
      }
    } catch (e) {
      console.error(e);
    }
  }

  register() {
    this.navCtrl.navigateBack('RegisterPage');
  }  

  
  onLoginError(err) {
    console.log(err);
  }
}
