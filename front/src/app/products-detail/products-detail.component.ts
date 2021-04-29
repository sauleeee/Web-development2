import { Component, OnInit } from '@angular/core';
import {Furniture, Order, Product} from '../models';
import {ActivatedRoute} from '@angular/router';
import {DetailService} from '../detail.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  furniture: Furniture[];
  loaded: boolean;
  logged: false;
  order: Order[] = [];

  constructor(private location: Location,
              private detailServ: DetailService ,
              private route: ActivatedRoute) { }

  ngOnInit(): void {this.getFurniture()}

  getFurniture(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      if (id != null){
        this.detailServ.getFurniture(id).subscribe((furniture) => {
          this.furniture = furniture;
          this.loaded = true;
        });
      }
    });
  }

  postOrder(img: string, title: string, price: number): void {
    this.detailServ.postOrder({title, img, price} as Furniture)
      .subscribe(furniture =>  {
        this.order.push(furniture);});
    window.alert('Your product has been added to the cart!');
  }

}
