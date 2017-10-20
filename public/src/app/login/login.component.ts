import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';
import { Router } from '@angular/router'

import { Http } from '@angular/http';
import "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    name: ''
  }

  constructor(private _userService: UserService, private _http: Http, private _router: Router) { 
    _userService.logout();
    console.log("logout",_userService.user)
  }

  ngOnInit() {
  }

  login(){
    this._http.get(`/authors/${this.user.name}`)
    .subscribe( 
      (response) => {
        var user = response.json()
        if(user){
          this._userService.login(user._id);
          this._router.navigate(['/dashboard']);
        }
        else{
          this._http.post(`/authors`,this.user)
          .subscribe( 
            (response) => {
              user = response.json()
              this._userService.login(user._id);
              this._router.navigate(['/dashboard']);
            },
            (err) => {
              console.log(err);
            }
          )          
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
