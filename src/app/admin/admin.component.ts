import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import  *  as  user  from  '../admin.json';
import { Output} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  
  @Output() user;
  ngOnInit() {
    console.log(user);
    user = user;
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}