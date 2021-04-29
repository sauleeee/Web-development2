import { Component, OnInit } from '@angular/core';
import {Post} from '../models';
import {DetailService} from '../detail.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts1: Post[];
  posts2: Post[];
  posts3: Post[];
  posts4: Post[];
  loaded: boolean;
  constructor(private postService: DetailService) { }

  ngOnInit(): void {
    this.getPost1();
    this.getPost2();
    this.getPost3();
    this.getPost4();

  }
  getPost1() {
    this.loaded = false;
    this.postService.getPost1().subscribe((post) => {
      this.posts1 = post;
      this.loaded = true;
    });
  }
  getPost2() {
    this.loaded = false;
    this.postService.getPost2().subscribe((post) => {
      this.posts2 = post;
      this.loaded = true;
    });
  }
  getPost3() {
    this.loaded = false;
    this.postService.getPost3().subscribe((post) => {
      this.posts3 = post;
      this.loaded = true;
    });
  }
  getPost4() {
    this.loaded = false;
    this.postService.getPost4().subscribe((post) => {
      this.posts4 = post;
      this.loaded = true;
    });
  }
}


