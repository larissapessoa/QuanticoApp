import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
})
export class FirebaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

export const FIREBASE_CONFIG = {
  apiKey: 'uzOKEEjRp5-OP30kgNmWjNVs',
    authDomain: 'https://quantico-f6643.firebaseapp.com/__/auth/handler',
    databaseURL: 'https://quantico-f6643.firebaseapp.com',
    projectID: '815731872392-llprmuceokf2m5j8911860vs964kul6b.apps.googleusercontent.com',
    storageBucket: 'quantico-f6643@appspot.gserviceaccount.com',
    messagingSenderId: '815731872392'
};