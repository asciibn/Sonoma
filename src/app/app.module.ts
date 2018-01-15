import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { GalleryService } from './services/gallery.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SubNavComponent,
    ProductImageComponent,
    ProductDescriptionComponent,
    FooterComponent,
    ProductGalleryComponent,
    ProductContainerComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgbModule.forRoot()
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
