import { Injectable } from '@angular/core';

import { Http } from '@angular/http'; // <— Imported

@Injectable()
export class UserService {
  user = '';

  constructor(private _http: Http) { }

  login(id){
    this.user = id;
  }
  logout(){
    this.user = '';
  }
}
