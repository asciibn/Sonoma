import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        NgbModule.forRoot()],
      declarations: [
        AppComponent,
        NavComponent,
        SubNavComponent,
        ProductImageComponent,
        FooterComponent,
        HeaderComponent,
        ProductGalleryComponent,
        ProductContainerComponent,
        ProductDescriptionComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
