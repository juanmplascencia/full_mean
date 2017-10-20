import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';
import { Router } from '@angular/router'

import { Http } from '@angular/http';
import "rxjs";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user = '';
  survey = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  }
  constructor(private _userService: UserService, private _http: Http, private _router: Router) {
    console.log("login",_userService.user)
    this.user = _userService.user;
  }

  ngOnInit() {
  }

  create(){
    console.log(`/survey/${this.user}`);
    this._http.post(`/survey/${this.user}`,{question:this.survey.question,options:[this.survey.option1,                  this.survey.option2,this.survey.option3,this.survey.option4],votes:[0,0,0,0]})
    .subscribe( 
      (response) => {
        console.log(response)
        this._router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  cancel(){
    console.log(this.user)
    this._userService.login(this.user);
    this._router.navigate(['/dashboard']);
  }
}
