import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // uname=''
  // acno=''
  // psw=''
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-z]+')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  register() {
    // var uname=this.uname
    // var acno=this.acno
    // var psw=this.psw
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw

    if (this.registerForm.valid) {
      const result = this.ds.register(uname, acno, psw)
      if (result) {
        alert('success')
        this.router.navigateByUrl('')


      }
      else {
        alert('User already exists')
        this.router.navigateByUrl('')

      }
    }
    else{
      alert('inavlid form')
    }
  }
  




}