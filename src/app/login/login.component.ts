import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "services/services.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim = " YOUR PERFECT BANKING PARTNER"
  placehld = "Enter Account number"
  acno = ""
  psw = ""
  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: 123, balance: 0 },
    1001: { acno: 1001, username: "arun", password: 123, balance: 0 },
    1002: { acno: 1002, username: "cheeku", password: 123, balance: 0 },
    1003: { acno: 1003, username: "amal", password: 123, balance: 0 }

  }
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })


  login() {
    // alert('login clicked')
    // var acno = this.acno //this this type aakand nikkan
    // var psw = this.psw
    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw

    if (this.loginForm.valid) {
      const result = this.ds.login(acno, psw)
      if (result) {
        alert('Login success')
        this.router.navigateByUrl('dashboard')
      }
      else {
        alert('incorrect username or password')
      }
    }
    else{
      alert('invalid Form')
    }

  }








  acnoChange(event: any) {


    this.acno = event.target.value
  }




  pswChange(event: any) {
    this.psw = event.target.value   //console.log(this.psw)
  }










}