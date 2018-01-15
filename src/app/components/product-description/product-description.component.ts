import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  public isCollapsed = false;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  constructor(private service: GalleryService) { }
  cost = 19.95;
  itemTitle: Array<string> = [
    'Williams-Sonoma Classic Apron, French Blue',
    'Williams Sonoma Stripe Adult Apron, Black',
    'Williams Sonoma Stripe Apron, Sage Green',
    'Williams Sonoma Bay Stripe Apron, Claret Red'];

    selectedTitle = this.itemTitle[0];

  ngOnInit() {
    this.service.itemSubject.subscribe( (num) => {
      this.selectedTitle = this.itemTitle[num];
    });
  }

}
