import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {

  constructor(private service: GalleryService) { }
  imageArray: Array<string> =
  ['assets/images/product-small-a.jpg',
  'assets/images/product-small-b.jpg',
  'assets/images/product-small-c.jpg',
   'assets/images/product-small-d.jpg'];

   selectedIndex: Number = 0;


  ngOnInit() {
  }

  selectImage(evt) {
    this.service.updateItem(evt.target.parentNode.dataset.imageIndex);
    this.selectedIndex = evt.target.parentNode.dataset.imageIndex;
  }

}
