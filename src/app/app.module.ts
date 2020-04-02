
import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LogicProvider } from './desafio-page/services/logic.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationService } from './services/authentication.service';
import { IonicStorageModule } from '@ionic/storage';


import * as firebase from 'firebase';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirestoreService } from './services/firestore.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Tab1Page } from './tab1/tab1.page';
import { DesafioPagePage } from './desafio-page/desafio-page.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicStorageModule.forRoot(),
    IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule, AngularFirestoreModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebase), FormsModule],
  providers: [
    StatusBar,
    IonicStorageModule,
    SplashScreen,
    AuthenticationService,
    LogicProvider,
    FirestoreService,
    Tab1Page,
    DesafioPagePage,
    TextToSpeech,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
