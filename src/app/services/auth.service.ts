import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tokenNotExpired} from "angular2-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(credentials) {
  /*	return this.httpClient.post('/api/authenticate',
		JSON.stringify(credentials))
		.pipe(map(response=>{
			let results = response.json();
			if(results && results.token) {
				localStorage.setItem('token',results.token);
				return true;
			}
			return false;
		}))*/
  }

  logout() {
  	localStorage.removeItem('token');
  }

  isLoggedIn(){
  	return tokenNotExpired();
  }
}
