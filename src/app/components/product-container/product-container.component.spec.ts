import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContainerComponent } from './product-container.component';
import { ProductImageComponent } from '../product-image/product-image.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { ProductGalleryComponent } from '../product-gallery/product-gallery.component';

describe('ProductContainerComponent', () => {
  let component: ProductContainerComponent;
  let fixture: ComponentFixture<ProductContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductContainerComponent,
      ProductImageComponent,
      ProductDescriptionComponent,
    ProductGalleryComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
