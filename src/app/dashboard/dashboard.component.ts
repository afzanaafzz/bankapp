import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "services/services.service";
import { DeleteconfirmComponent } from '../deleteconfirm/deleteconfirm.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //acno = ''
  psw = ''
  amnt = ''
 dateandtime:any
  acno1 = ''
  psw1 = ''
  amnt1 = ''
  user = ''
 acno:any



  constructor(private ds: DataService, private fb: FormBuilder,private router:Router)
   {

this.dateandtime=new Date()
    //acccess name
    this.user = this.ds.currentuser
  }
  depositForm = this.fb.group({ acno: [''], psw: [''], amnt: [''] })
  withdrawForm = this.fb.group({ acno1: [''], psw1: [''], amnt1: [''] })

ngOnInit(): void 
{
  if(!localStorage.getItem('currentacno'))
  {
    alert('Please Login First')
    this.router.navigateByUrl('')
  }
}

  deposit() {
    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw
    var amnt = this.depositForm.value.amnt
    const result = this.ds.deposit(acno, psw, amnt)
    if (result) {
      alert(`${amnt} credited to your account,balance:${result}`)
    }
    else {
      alert('Incorrect acno or password')
    }

  }



  withdraw() {
    var acno1 = this.withdrawForm.value.acno1
    var psw1 = this.withdrawForm.value.psw1
    var amnt1 = this.withdrawForm.value.amnt1
    const result = this.ds.withdraw(acno1, psw1, amnt1)
    if (result) {
      alert(`${amnt1} debited from your account,balance:${result}`)
    }

  }
  logout() {
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    this.router.navigateByUrl('')
  }
deleteconfirm()
{
this.acno=JSON.parse(localStorage.getItem('currentacno') || "")
}
}