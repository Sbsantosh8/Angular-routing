
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
{path:'app',component:AppComponent},
{path:'',redirectTo:'/app',pathMatch:'full'},
{path:'users',component:UserListComponent},
{path:'users/:id',component:UserDetailsComponent}

];
