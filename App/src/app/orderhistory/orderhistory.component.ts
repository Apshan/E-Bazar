import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Orders } from '../order/Orders';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  liveorderlist:  Orders[];
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.liveObservable.subscribe(data =>{this.liveorderlist=data;console.log(this.liveorderlist);console.log("ABC")});
    this.orderService.getLiveOrders()
  }
  
}
