import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';



@NgModule({

    declarations:[
        InicioComponent,
        LandingComponent
    ]
    // imports:[

    // ]
})

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', component: LandingComponent },
];


// export const routes: Routes = []
