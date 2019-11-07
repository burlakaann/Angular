import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Items } from 'src/app/allegro/items';

@Component({
  selector: 'app-two-image-items',
  templateUrl: './two-image-items.component.html',
  styleUrls: ['./two-image-items.component.scss']
})
export class TwoImageItemsComponent implements OnInit, Items {
  @ViewChild('imageItem1') imageItem1;
  @ViewChild('imageItem2') imageItem2;
  @Input() images: any;
  constructor() { }

  ngOnInit() {
  }

  getItems(): any {
    return [
      {
        'type': 'IMAGE',
        'url': this.imageItem1.getUrlImage()
      },
      {
        'type': 'IMAGE',
        'url': this.imageItem2.getUrlImage()
      }
    ];
  }
}
