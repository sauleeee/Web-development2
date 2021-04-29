import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Furniture, Order, Post, Product, Review} from './models';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {}

  getPost1(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}/api/post/post1`);
  }
  getPost2(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}/api/post/post2`);
  }
  getPost3(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}/api/post/post3`);
  }
  getPost4(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}/api/post/post4`);
  }

  getProduct(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.BASE_URL}/api/product/`);
  }
  getFurniture(id: number): Observable<Furniture[]> {
    return this.client.get<Furniture[]>(`${this.BASE_URL}/api/product/${id}/furniture`);
  }
  getReview(id: number): Observable<Review[]> {
    return this.client.get<Review[]>(`${this.BASE_URL}/api/product/${id}/review`);
  }


  getOrders(): Observable<Order[]> {
    return this.client.get<Order[]>(`${this.BASE_URL}/api/order/`);
  }
  postOrder(product: Furniture): Observable<Order> {
    return this.client.post<Order>(`${this.BASE_URL}/api/order/create`, product, this.httpOptions);
  }
  deleteOrder(order: Order | number): Observable<Order> {
    const id = typeof order === 'number' ? order : order.id;
    return this.client.delete<Order>(`${this.BASE_URL}/api/order/${id}/delete`, this.httpOptions);
  }
  deleteALLOrders(): Observable<Order[]> {
    return this.client.delete<Order[]>(`${this.BASE_URL}/api/order_all_delete/`, this.httpOptions);
  }
}


