import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
// Importamos las rutas de los componentes
import { InicioComponent } from './inicio/inicio.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'landing', component: LandingComponent },
  { path: '**', component: NgModule },
//   {
//     path: '**',
//     redirectTo: 'landingPage',
//   },
];
