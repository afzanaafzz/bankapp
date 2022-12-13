import { Component } from '@angular/core';
import { DataService } from "services/services.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  acno:any
  transaction:any
  bal:any



  constructor(private ds:DataService){


    this.acno=this.ds.currentacno
    
    this.transaction=this.ds.gettransaction(this.acno)  //transaction return cheyyunth array aan so to store it
  
  }

}