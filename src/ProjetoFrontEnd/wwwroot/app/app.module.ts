import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteEditComponent } from './restaurantes/restaurantes-edit.component';
import { PratosComponent } from './pratos/pratos.component';
import { PratoEditComponent } from './pratos/pratos-edit.component';

import { RestauranteService } from './shared/services/restaurantes.service';
import { PratoService } from './shared/services/pratos.services';

import { routing } from './app.routing';

@NgModule({
    imports:
    [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations:
    [
        MenuComponent,
        HomeComponent,
        RestaurantesComponent,
        RestauranteEditComponent,
        PratosComponent,
        PratoEditComponent
    ],
    providers:
    [
        RestauranteService,
        PratoService
    ],
    bootstrap: [
        MenuComponent,
        HomeComponent,
        RestaurantesComponent,
        RestauranteEditComponent,
        PratosComponent,
        PratoEditComponent
    ]
})
export class AppModule {
}
