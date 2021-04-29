import { Component, OnInit } from '@angular/core';
import {DetailService} from '../detail.service';
import {Product} from '../models';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product[];
  loaded: boolean;
  constructor(private postService: DetailService) { }

  ngOnInit(): void {this.getProduct()}

  getProduct() {
    this.loaded = false;
    this.postService.getProduct().subscribe((product) => {
      this.product = product;
      this.loaded = true;
    });
  }


}
