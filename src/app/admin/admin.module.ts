import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRecipeCrudComponent } from './admin-recipe-crud/admin-recipe-crud.component';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminhomeComponent,
    AdminRecipeCrudComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AdminModule { }
