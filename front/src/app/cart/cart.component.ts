import { Component, OnInit } from '@angular/core';
import {Order} from '../models';
import {DetailService} from '../detail.service';
import {objectKeys} from 'codelyzer/util/objectKeys';
import deleteProperty = Reflect.deleteProperty;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orders: Order[];
  logged = false;
  public order: any ={};

  public empty = true;

  constructor(private service: DetailService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      this.getOrders();
    }
  }

  getOrders() {
    this.service.getOrders().subscribe(res => {
      this.orders = res;
      console.log(this.orders);
    });
  }
  deleteOrder(order: Order) {
    this.orders = this.orders.filter((x) => x !== order);
    this.service.deleteOrder(order).subscribe(() => {
      console.log('deleted', order);
    });
  }

  EmptyCart() {
    this.service.deleteALLOrders().subscribe();
    window.location.reload();
  }


}
