import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, NgControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
function phoneValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^131/)) {
    return { invalidphonenumber: true };
  }
}



@Component({
  selector: 'app-login-f',
  templateUrl: './login-f.component.html',
  styleUrls: ['./login-f.component.css']
})
export class LoginFComponent implements OnInit {

  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  // static required(c: FormControl): StringMap<string, boolean> {
  //   return isBlank(c.value) || c.value == "" ? { "required": true } : null;
  // }
  constructor(fb: FormBuilder, private auth:AuthService,private router:Router) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.min(100000), Validators.max(9999999999)])],

    })
    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];

    // this.username.valueChanges.subscribe(
    //   (value: string) => {
    //     console.log('用户名是:', value);
    //   });
    // this.myForm.valueChanges.subscribe(
    //   (form: any) => {
    //     console.log('form changed to:', form);
    //   });
  }

  ngOnInit() {
  }
  onSubmit(value: string): void {
    var myRouter = this.router;
    console.log(value);
      this.auth.login(value,function(){
      this.router.navigate(['/home']) }.bind(this));
    
    /*this.httpclient.get('http://localhost:8081/login').subscribe(
      (resp: any) => {
        console.log(resp);
        let u = resp[0];
        let o = value;
        if (u.username == o['username'] && u.password == o['password']) {
          return '成功';
        }
        else {
          return '失败';
        }

      }
    )*/
    /*this.httpclient.post('http://localhost:8081/login', JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          alert("登陆成功");
        } else {
          alert("登陆失败");
        }
      }
    );*/
  }

  ueii() {

    if (this.username.value == 'ysc' && this.password.value == '123456') {
      return '成功';
    } else {
      return '失败';
    }
  }

}
function usernameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidusername: false };
  }


}
