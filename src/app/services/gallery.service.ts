import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GalleryService {
  public itemSubject: Subject<number> = new Subject<number>();

  constructor() { }

  public updateItem(num: number) {
    this.itemSubject.next(num);
  }

}
