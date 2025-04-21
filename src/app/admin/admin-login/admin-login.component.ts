import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminLoginService: AdminLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminFormGroup = this.formBuilder.group(
      {
        username: [''],
        password: [''],
      }
    )
  }

  onAdminLogin() {
    console.log(this.adminFormGroup.value);
    let loginStatus = this.adminLoginService
      .checkAdminLoginDetails(this.adminFormGroup.value)
      .subscribe(
        response => {
          if (response) {
            this.router.navigate(['/admindash']);
            localStorage.setItem('adminUser', JSON.stringify(this.adminFormGroup.value));
          } else {
              alert("not a valid user");
          }
        }
      );
    console.log(loginStatus);
  }
}
