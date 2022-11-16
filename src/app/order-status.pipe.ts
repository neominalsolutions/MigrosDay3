import { Pipe, PipeTransform } from '@angular/core';



export enum OrderStatus {
  Ordered = 1, // yellow
  ReadyForShipment = 2, // green
  Shipped = 3, // blue
  Invoiced = 4 // orange
}


@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {


    switch (value) {
      case OrderStatus.Ordered:
        return "Ordered"
      case OrderStatus.ReadyForShipment:
        return "ReadyForShipment";
      case OrderStatus.Shipped:
        return "Shipped";
      case OrderStatus.Invoiced:
        return "Invoiced";
      default:
        break;
    }

    return value;
  }

}
