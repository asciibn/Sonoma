import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent implements OnInit {

  constructor(private service: GalleryService) { }
  itemSubTitle: Array<string> = [
    'Williams-Sonoma Classic Apron, French Blue',
    'Williams Sonoma Stripe Adult Apron, Black',
    'Williams Sonoma Stripe Apron, Sage Green',
    'Williams Sonoma Bay Stripe Apron, Claret Red'];

    selectedSubTitle = this.itemSubTitle[0];

    ngOnInit() {
      this.service.itemSubject.subscribe( (num) => {
        this.selectedSubTitle = this.itemSubTitle[num];
      });
    }

}
