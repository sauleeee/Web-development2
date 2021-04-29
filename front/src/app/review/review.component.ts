import { Component, OnInit } from '@angular/core';
import {Furniture, Review} from '../models';
import {Location} from '@angular/common';
import {DetailService} from '../detail.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review: Review[];
  loaded: boolean;
  logged: false;
  numberLike: number;
  numberDislike: number;

  constructor(private location: Location,
              private detailServ: DetailService ,
              private route: ActivatedRoute) {
    this.numberLike = 0;
    this.numberDislike = 0;
  }

  ngOnInit(): void {this.getReview()}

  getReview(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      if (id != null){
        this.detailServ.getReview(id).subscribe((review) => {
          this.review = review;
          this.loaded = true;
        });
      }
    });
  }

  likeButtonClick(){
    this.numberLike++;
  }

  dislikeButtonClick(){
    this.numberDislike--;
  }

}
