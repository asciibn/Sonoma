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

  stateString = 'Expanded';
  stateString2 = 'Collapsed';
  stateString3 = 'Collapsed';

  accordianArray: Array<boolean> = [this.isCollapsed, this.isCollapsed2, this.isCollapsed3];
  constructor(private service: GalleryService) { }
  cost = 19.95;
  itemTitle: Array<string> = [
    'Williams-Sonoma Classic Apron, French Blue',
    'Williams Sonoma Stripe Adult Apron, Black',
    'Williams Sonoma Stripe Apron, Sage Green',
    'Williams Sonoma Bay Stripe Apron, Claret Red'];

    selectedTitle = this.itemTitle[0];

    currentNumber = 0;

  ngOnInit() {
    this.service.itemSubject.subscribe( (num) => {
      this.selectedTitle = this.itemTitle[num];
      this.currentNumber = num;
    });
  }

  onChange(evt, number) {
    console.log(evt);
    evt.preventDefault();
    if (number > 0) {
      this.cost = 19.95 * number;
    }
  }

  onSubmit(evt) {
    evt.preventDefault();
    console.log(this.currentNumber);
  }

  sectionState(evt, section, value) {
      if ( evt.target.classList.length > 0) {
        if (value === false) {
          evt.target.classList.remove('expand-button-state');
          evt.target.classList.add('collapsed-button-state');
          switch (section) {
            case 'isCollapsed' :
            this.stateString = 'Collapsed';
            break;
    
            case 'isCollapsed2' :
            this.stateString2 = 'Collapsed';
            break;
    
            case 'isCollapsed3' :
            this.stateString3 = 'Collapsed';
            break;
          }
          
        }else {
          evt.target.classList.remove('collapsed-button-state');
          evt.target.classList.add('expand-button-state');
          switch (section) {
            case 'isCollapsed' :
            this.stateString = 'Expanded';
            break;
    
            case 'isCollapsed2' :
            this.stateString2 = 'Expanded';
            break;
    
            case 'isCollapsed3' :
            this.stateString3 = 'Expanded';
            break;
          }
        }
      }

      switch (section) {
        case 'isCollapsed' :
        return this.isCollapsed = !this.isCollapsed;
     

        case 'isCollapsed2' :
        return this.isCollapsed2 = !this.isCollapsed2;
      

        case 'isCollapsed3' :
        return this.isCollapsed3 = !this.isCollapsed3;
     
      }

    }

       

}
