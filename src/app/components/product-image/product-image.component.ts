import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  constructor(private service: GalleryService) { }
  currentImage: String = 'assets/images/product-large-a.jpg';

  largeImageArray: Array<string> =
  ['assets/images/product-large-a.jpg',
   'assets/images/product-large-b.jpg',
   'assets/images/product-large-c.jpg',
   'assets/images/product-large-d.jpg'];

  ngOnInit() {
    this.service.itemSubject.subscribe( (num) => {
      this.currentImage = this.largeImageArray[num];
    });
  }

}
