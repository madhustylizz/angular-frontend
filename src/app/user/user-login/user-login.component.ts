import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userLoginService: UserLoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(
      {
        'id': [null],
        "email": [],
        "name": [],
        "password": [],
        "phone": [],
      }
    );
  }

  onclk() {
    this.router.navigate(['/userreg']);
  }

  onUserLogIn() {
    this.userLoginService.checkUserLoginDetails(this.userForm.value).subscribe(
      response => {
        console.log(response);
        if (response) {
          this.router.navigate(['/userdash']);
        } else {
          alert("no user exists with the given details. please register.")
        }
      }
    )
  }

}
