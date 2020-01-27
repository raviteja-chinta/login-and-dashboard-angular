import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';

import  *  as  users  from  '../userinfo.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  const USERS = users.users;
  users = this.USERS

  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }

}
