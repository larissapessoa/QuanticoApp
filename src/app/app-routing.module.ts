import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),

  },
  {
    path: '',
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
  },
  {
    path: 'desafios-turma',
    loadChildren: () => import('./desafios-turma/desafios-turma.module').then( m => m.DesafiosTurmaPageModule)
  },
  {
    path: 'desafio-professor',
    loadChildren: () => import('./desafio-professor/desafio-professor.module').then( m => m.DesafioProfessorPageModule)
  },
  {
    path: 'level4',
    loadChildren: () => import('./level4/level4.module').then( m => m.Level4PageModule)
  },
  {
    path: 'level5',
    loadChildren: () => import('./level5/level5.module').then( m => m.Level5PageModule)
  },
  {
    path: 'level6',
    loadChildren: () => import('./level6/level6.module').then( m => m.Level6PageModule)
  },
  {
    path: 'level7',
    loadChildren: () => import('./level7/level7.module').then( m => m.Level7PageModule)
  },
  {
    path: 'level8',
    loadChildren: () => import('./level8/level8.module').then( m => m.Level8PageModule)
  },
  {
    path: 'level9',
    loadChildren: () => import('./level9/level9.module').then( m => m.Level9PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
