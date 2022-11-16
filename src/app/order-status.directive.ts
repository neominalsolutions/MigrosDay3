import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { OrderStatus, OrderStatusPipe } from './order-status.pipe';

@Directive({
  selector: '[orderBgColor]'
})
export class OrderBgColorDirective implements OnInit {

  @Input() status!:number;

  constructor(private element:ElementRef, private renderer2:Renderer2) { }


  ngOnInit(): void {
    if(this.status == OrderStatus.Ordered){
      this.element.nativeElement.style.backgroundColor = 'yellow';
    } else if(this.status == OrderStatus.ReadyForShipment){
      this.element.nativeElement.style.backgroundColor = 'green';
    } else if(this.status == OrderStatus.Shipped){
      this.element.nativeElement.style.backgroundColor = 'blue';
    }
    else if(this.status == OrderStatus.Invoiced){
      this.renderer2.setStyle(this.element.nativeElement,'background-color','orange');
      // this.renderer2.addClass();
      // this.element.nativeElement.style.backgroundColor = 'orange';
    }

  }

}
