import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router'

import { Http } from '@angular/http';
import "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  surveys = [];
  user = '';

  constructor(private _userService: UserService, private _http: Http, private _router: Router) { 
    console.log("login",_userService.user)
    this.user = _userService.user;
    this.show();
  }

  ngOnInit() {
  }

  show(){
    this._http.get(`/authors`)
    .subscribe( 
      (surveys) => {
        this.surveys = surveys.json();
      },
      (err) => {
        console.log(err);
      }
    )
  }
  create(){
    console.log(this.user)
    this._userService.login(this.user);
    this._router.navigate(['/create']);
  }
  logout(){
    console.log(this.user)
    this._userService.logout();
    this._router.navigate(['']);
  }
  vote(id){
    console.log(this.user)
    this._userService.login(this.user);
    this._router.navigate(['poll',id]);
  }
  destroy(id){
    this._http.delete(`/surveys/${id}`)
    .subscribe( 
      (response) => {
        console.log(response.json())
        this.show()
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
