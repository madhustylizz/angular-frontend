import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-booklist',
  templateUrl: './user-booklist.component.html',
  styleUrls: ['./user-booklist.component.css']
})
export class UserBooklistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onclick(){
    this.router.navigate(['/userlogin']);
  }

}
