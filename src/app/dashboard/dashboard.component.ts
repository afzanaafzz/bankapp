import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DataService } from "services/services.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno = ''
  psw = ''
  amnt = ''

  acno1 = ''
  psw1 = ''
  amnt1 = ''
  user = ''




  constructor(private ds: DataService, private fb: FormBuilder) {
    

    //acccess name
    this.user = this.ds.currentuser
  }
  depositForm=this.fb.group({acno:[''],psw:[''],amnt:['']})
  withdrawForm=this.fb.group({acno1:[''],psw1:[''],amnt1:['']})



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

}