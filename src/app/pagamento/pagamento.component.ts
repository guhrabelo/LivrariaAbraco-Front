import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments'
@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(){
    render(
      {
        id :"#myPaypalButtons",
        currency : "BRL",
        value : "163.13",
        onApprove: (details) =>
        {
          alert("Trlkajwklj")
        }
      }
    );

  }

}