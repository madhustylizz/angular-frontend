import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserBooklistComponent } from './user-booklist/user-booklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserRecipeDetailComponent } from './user-recipe-detail/user-recipe-detail.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    UserBooklistComponent,
    UserRecipeDetailComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class UserModule { }
