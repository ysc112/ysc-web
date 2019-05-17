import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  constructor(private httpclient:HttpClient,private router:Router) { }
  login(u: any,callback:any):  boolean {
    this.httpclient.post('http://localhost:8081/login', JSON.stringify(u)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
         this.loggedIn = true;
         callback();
        } else {
          this.loggedIn = false;
        }
      }
    );
    return true;
  }
  logout(){
    this.loggedIn = false;
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  callback(){
    this.router.navigate(['./home']);
  }
}
