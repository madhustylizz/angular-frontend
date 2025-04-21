import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterService } from './user-register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userRegisterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userRegistationService: UserRegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group({
      "name": [],
      "email": [],
      "phone": [],
      "password": [],
      "cpassword": [],
    })
  }

  onUserRegistrationSubmit() {
    let user = this.userRegisterForm.value;
    if (user['password'] == user['cpassword'] && user.name!=null && user.email!= null && user.password!=null) {
      console.log(this.userRegisterForm.value);
      this.userRegistationService.checkUserRegistrationDetails(user).subscribe(
        response => {
          alert("user registration succesful.");
          console.log(response);
          this.router.navigateByUrl("/userlogin");
        }
      )
    } else {
      alert("All Fields are mandatory && password is not matched with confirm password");
    }
  }

}
