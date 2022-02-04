import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./paginas/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'create-taller',
    loadChildren: () => import('./paginas/create-taller/create-taller.module').then(m => m.CreateTallerPageModule)
  },
  {
    path: 'detallestaller/:id',
    loadChildren: () => import('./paginas/detallestaller/detallestaller.module').then( m => m.DetallestallerPageModule)
  },
  {
    path: 'encuesta',
    loadChildren: () => import('./paginas/encuesta/encuesta.module').then( m => m.EncuestaPageModule)
  },
  {
    path: 'results/:result',
    loadChildren: () => import('./paginas/results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'agregarencuesta/:status',
    loadChildren: () => import('./paginas/agregarencuesta/agregarencuesta.module').then( m => m.AgregarencuestaPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./paginas/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'inscribirpaciente/:taller',
    loadChildren: () => import('./paginas/inscribirpaciente/inscribirpaciente.module').then( m => m.InscribirpacientePageModule)
  },
  {
    path: 'pacientescriticos',
    loadChildren: () => import('./paginas/pacientescriticos/pacientescriticos.module').then( m => m.PacientescriticosPageModule)
  },
  {
    path: 'pacientesrealizarprueba',
    loadChildren: () => import('./paginas/pacientesrealizarprueba/pacientesrealizarprueba.module').then( m => m.PacientesrealizarpruebaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./paginas/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./paginas/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'create-event',
    loadChildren: () => import('./paginas/create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'list-event',
    loadChildren: () => import('./paginas/list-event/list-event.module').then( m => m.ListEventPageModule)
  },
  {
    path: 'eventdetail/:id',
    loadChildren: () => import('./paginas/eventdetail/eventdetail.module').then( m => m.EventdetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
