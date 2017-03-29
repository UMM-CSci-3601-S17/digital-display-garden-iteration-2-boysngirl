// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {UserListComponent} from "./users/user-list.component";
// Route Configuration
export const routes: Routes = [
    // { path: '', component: PlantListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);