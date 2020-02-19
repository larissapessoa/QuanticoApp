import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogicProvider } from './services/logic.service';


@Component({
  selector: 'app-desafio-page',
  templateUrl: './desafio-page.page.html',
  styleUrls: ['./desafio-page.page.scss'],
})
export class DesafioPagePage implements OnInit {
  


  questions$: Observable<IData[]>;
  totalQuestions: number;

  txtLiterario: any;
  changeBackground: any;
  urlTxt: string;
  
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public _logic: LogicProvider
    
  ) {}

  
  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.txtLiterario = this.router.getCurrentNavigation().extras.state.data;
      }
      console.log("txt", this.txtLiterario)
      
     });

   /*   //this.changeBackground = true;
    var urlTxt = 'assets/textos/' + this.txtLiterario.id +'.pdf';
    console.log('urlTxt', urlTxt);
    
    this.document.viewDocument('file:///android_asset/www/assets/1.pdf', 'application/pdf', options) */;
  
    //this.urlTxt = 'assets/textos/' + this.txtLiterario.id +'.pdf';

    }

 
  ionViewWillEnter() {
    this.questions$ = this._logic.getData()
    this.questions$.subscribe((res) => {
      this.totalQuestions = res.length
    })
  }
}



export interface IData {
  id?: number
  question?: string
}
