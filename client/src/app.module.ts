import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent} from './app/home/home.component';
import { UserListComponent } from './app/users/user-list.component';
import { UserListService } from './app/users/user-list.service';
import { PlantListComponent } from './app/plants/plant-list.component';
import { PlantListService } from './app/plants/plant-list.service';
import { DialogComponent} from './app/dialog/dialog.component';
import { routing } from './app/app.routes';
import { FormsModule } from '@angular/forms';

import { PipeModule } from './pipe.module';
import {BedListService} from "./app/plants/bed-list.service";
import {BedListComponent} from "./app/plants/bed-list.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        FormsModule,
        PipeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        UserListComponent,
        PlantListComponent,
        BedListComponent,
        DialogComponent
    ],
    providers: [ UserListService, PlantListService, BedListService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
