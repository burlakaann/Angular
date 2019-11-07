import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Items } from 'src/app/allegro/items';

@Component({
  selector: 'app-image-text-items',
  templateUrl: './image-text-items.component.html',
  styleUrls: ['./image-text-items.component.scss']
})
export class ImageTextItemsComponent implements OnInit, Items {
  @ViewChild('imageItem') imageItem;
  @ViewChild('textItem') textItem;
  @Input() images: any;
  constructor() { }

  ngOnInit() {
  }

  getItems(): any {
    return [
      {
        'type': 'IMAGE',
        'url': this.imageItem.getUrlImage()
      },
      {
        'type': 'TEXT',
        'content': this.textItem.getContent()
      }
    ];
  }
}
