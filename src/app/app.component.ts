import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FirestoreService } from './services/firestore.service';
import { NavigationExtras } from '@angular/router';
import { ServicostorageService } from './services/servicostorage.service';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private firestore: FirestoreService,
    private navCtrl: NavController,
    private authService: AuthenticationService
  ) {
    this.initializeApp();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      var professor = false;
      let navigationExtras: NavigationExtras = {
        state: {
          data: ""
        }
      };
      firebase.auth().onAuthStateChanged(user => {
        console.log("user", user);
        if (user) {
          this.statusBar.styleLightContent();
          this.splashScreen.hide();
          this.firestore.getProfessor().subscribe(async snapshot => {
            snapshot.forEach(doc => {
              if (doc.data().email == user.email) {
                professor = true;
                navigationExtras.state.data = doc.data().email;
              }
            });
            if (!professor) {
              navigationExtras.state.data = user.email;
              this.navCtrl.navigateForward('/tabs', navigationExtras);
              //this.router.navigate(['/tabs'], navigationExtras);
            }
            else this.navCtrl.navigateForward('/professor', navigationExtras);
            //else this.router.navigate(['/professor'], navigationExtras);
          });
        }
        else {
         this.router.navigate(["/login"]);
          //this.navCtrl.navigateForward('/login');
          //this.navCtrl.navigateRoot('/login');
          this.statusBar.styleLightContent();
          this.splashScreen.hide();
        }
      })
    });
  }


  
}

