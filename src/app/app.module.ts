import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { HttpClientModule } from '@angular/common/http';
import { LogicProvider } from './desafio-page/services/logic.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from 'src/app/firebase/firebase.component';
import { LoginPage } from './login/login.page';
import { ModelsDirective } from './models/models.directive';



@NgModule({
  declarations: [AppComponent], //falta o nome do projeto
  entryComponents: [], //falta o nome do projeto
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    LogicProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
