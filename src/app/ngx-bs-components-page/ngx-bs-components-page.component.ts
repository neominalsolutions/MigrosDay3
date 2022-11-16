import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ngx-bs-components-page.component.html',
  styleUrls: ['./ngx-bs-components-page.component.scss']
})
export class NgxBsComponentsPageComponent implements OnInit {


  minDate=new Date(2022,10,10)
  maxDate=new Date(2022,10,15)

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value:any){
    console.log('value',value);
  }

}
