import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'desafio-page',
    loadChildren: () => import('./desafio-page/desafio-page.module').then(m => m.DesafioPagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'professor',
    loadChildren: () => import('./professor/professor.module').then(m => m.ProfessorPageModule)
  },
  {
    path: 'adicionarturma',
    loadChildren: () => import('./adicionarturma/adicionarturma.component')
  },
  {
    path: 'turma-page',
    loadChildren: () => import('./turma-page/turma-page.module').then( m => m.TurmaPagePageModule)
  },
  {
    path: 'level1',
    loadChildren: () => import('./level1/level1.module').then( m => m.Level1PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'level2',
    loadChildren: () => import('./level2/level2.module').then( m => m.Level2PageModule)
  },
  {
    path: 'level3',
    loadChildren: () => import('./level3/level3.module').then( m => m.Level3PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
