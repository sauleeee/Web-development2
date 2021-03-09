import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumsService} from '../albums.service';
import {Photos} from '../models';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photos[];

  constructor(private location: Location,
              private albumServ: AlbumsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  goBack() {
    this.location.back();
  }


  getPhotos(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id != null){
        this.albumServ.getAlbumPhotos(id).subscribe((photos) => {
          this.photos = photos;
        });
      }
    });
  }
}
