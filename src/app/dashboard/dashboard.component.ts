import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import  *  as  user  from  '../admin.json';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstname: string;
  lastname: string;
  constructor(private authService: AuthService, private router: Router) {
    this.user = user; 
  }
  
  ngOnInit() {
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  manageUsers() {
    this.router.navigateByUrl('/users');
  }

}
