import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteEditComponent } from './restaurantes/restaurantes-edit.component';
import { PratosComponent } from './pratos/pratos.component';
import { PratoEditComponent } from './pratos/pratos-edit.component';

const appRoutes: Routes = [
    {
        path: 'restaurantes',
        component: RestaurantesComponent
    },
    {
        path: 'restaurantes/edit/:id',
        component: RestauranteEditComponent
    },
    {
        path: 'restaurantes/create',
        component: RestauranteEditComponent
    },
    {
        path: 'pratos',
        component: PratosComponent
    },
    {
        path: 'pratos/edit/:id',
        component: PratoEditComponent
    },
    {
        path: 'pratos/create',
        component: PratoEditComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);
