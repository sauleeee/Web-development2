import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  numberLike: number;
  numberDislike:number;
  constructor() {
    this.numberLike = 0;
    this.numberDislike = 0;
  }

  likeButtonClick(){
    this.numberLike++;
  }

  disLikeButton (){
    this.numberDislike--;
  }



  ngOnInit(): void {
  }

}
