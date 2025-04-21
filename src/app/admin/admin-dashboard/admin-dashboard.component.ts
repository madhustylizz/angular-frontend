import { Component, OnInit } from '@angular/core';
//import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    let userString = localStorage.getItem('adminUser');
    if (userString != null) {
      this.user = JSON.parse(userString);

    }
    //this.adminService.SendGetRequest().subscribe()
  }

  logOut() {
    this.router.navigate(['/']);
  }
}
