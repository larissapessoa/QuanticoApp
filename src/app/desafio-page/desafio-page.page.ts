import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-desafio-page',
  templateUrl: './desafio-page.page.html',
  styleUrls: ['./desafio-page.page.scss'],
})
export class DesafioPagePage implements OnInit {

  txtLiterario: any;
  changeBackground: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private document: DocumentViewer
  ) { 
    

    
  }

  
  ngOnInit() {
    const options: DocumentViewerOptions = {
      title:'My PDF'
    }
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.txtLiterario = this.router.getCurrentNavigation().extras.state.data;
      }
      console.log("txt", this.txtLiterario)
      
     });

     this.changeBackground = true;
    
    this.document.viewDocument('assets/' + this.txtLiterario.id +'.pdf', 'application/pdf', options);
  
  }

}
