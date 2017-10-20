import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router'

import { ActivatedRoute } from '@angular/router';

import { Http } from '@angular/http';
import "rxjs";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  survey = [];
  user = '';
  poll = '';
  constructor(private _userService: UserService, private _http: Http, private _router: Router,private _route: ActivatedRoute) {
    console.log("login",_userService.user)
    this.user = _userService.user;
    this._route.paramMap.subscribe( params => {
      this.poll = params.get('id');
      console.log(this.poll)
      this.show();
    })
   }

  ngOnInit() {}

  show(){
    this._http.get(`/surveys/${this.poll}`)
    .subscribe( 
      (survey) => {
        console.log(survey.json())
        this.survey = survey.json();
      },
      (err) => {
        console.log(err);
      }
    )
  }
  main(){
    this._http.put(`/surveys/${this.poll}`,this.survey)
    .subscribe( 
      (survey) => {
        this._userService.login(this.user);
        this._router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
      }
    )

  }
  add(i){
    this.survey['votes'][i]++;
  }
}
