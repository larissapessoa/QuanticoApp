import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ServicostorageService } from '../services/servicostorage.service';
import { FirestoreService } from '../services/firestore.service';
import { AuthenticationService } from '../services/authentication.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  fases: Fases[] = [
    {
      numero: 1,
      imagem: "assets/images/017-astronaut.png",
      habilitado: true
    },
    {
      numero: 2,
      imagem: "assets/images/020-astronaut.png",
      habilitado: false
    },
    {
      numero: 3,
      imagem: "assets/images/008-astronaut.png",
      habilitado: false
    },
    {
      numero: 4,
      imagem: "assets/images/013-astronaut.png",
      habilitado: false
    },
    {
      numero: 5,
      imagem: "assets/images/012-astronaut.png",
      habilitado: false
    },
    {
      numero: 6,
      imagem: "assets/images/005-astronaut.png",
      habilitado: false
    }, {
      numero: 7,
      imagem: "assets/images/018-astronaut.png",
      habilitado: false
    },
    {
      numero: 8,
      imagem: "assets/images/019-astronaut.png",
      habilitado: false
    },
    {
      numero: 9,
      imagem: "assets/images/011-astronaut.png",
      habilitado: false
    }
  ]

  emailEstudante: any;
  idEstudante: any;


  constructor(
    private router: Router,
    private consultaFase: ServicostorageService,
    private route: ActivatedRoute,
    private firestore: FirestoreService,
    private authService: AuthenticationService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.emailEstudante = this.router.getCurrentNavigation().extras.state.data;
        console.log("id tabs", this.emailEstudante);
      }
    });
  }

  ionViewWillEnter() {
    this.verificarDisponivel();
  }

  change(){
    this.themeService.toggleAppTheme();
  }



  verificarDisponivel() {
    this.consultaFase.getFases().then(data => {
      if (data != null) {
        this.fases = <[Fases]>data;
      } else {
        this.consultaFase.setFases(this.fases).then(data2 => {
          console.log("Esta Nulo (Não Mais)");
        })
      }
    });
  }
  
  abrirDesafio(numero: number) {
    this.firestore.getEstudantes().subscribe(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == this.emailEstudante) {
          console.log("doc id", doc.id);
          this.idEstudante = doc.id;
        }
      });
      let navigationExtras: NavigationExtras = {
        state: {
          data: {
            id: numero,
            idEstudante: this.idEstudante
          }
        }
      };
      this.router.navigate(['/desafio-page'], navigationExtras);
    });
  }
  
  sair(){
    this.authService.logoutUser();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.verificarDisponivel();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}


interface Fases {
  numero: number,
  imagem: string,
  habilitado: boolean
}

