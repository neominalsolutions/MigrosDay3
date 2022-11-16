import { Component, OnInit } from '@angular/core';


export interface Order {
  orderNumber:number;
  orderDate:Date;
  shipCompany:string;
  orderTotal:number;
  customerFirstName:string;
  customerLastName:string;
  orderStatus:number
}

@Component({
  templateUrl: './pipe-demo-page.component.html',
  styleUrls: ['./pipe-demo-page.component.scss']
})
export class PipeDemoPageComponent implements OnInit {



  order:Order = {
    orderNumber:1,
    orderDate:new Date(),
    shipCompany:'Arkas',
    orderTotal:256.70,
    customerFirstName:'Ali',
    customerLastName:'can',
    orderStatus:4
  }

  constructor() { }

  ngOnInit(): void {
  }

}
