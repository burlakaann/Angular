import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Items } from 'src/app/allegro/items';

@Component({
  selector: 'app-text-image-items',
  templateUrl: './text-image-items.component.html',
  styleUrls: ['./text-image-items.component.scss']
})
export class TextImageItemsComponent implements OnInit, Items {
  @ViewChild('imageItem') imageItem;
  @ViewChild('textItem') textItem;
  @Input() images: any;
  constructor() { }

  ngOnInit() {
  }

  getItems(): any {
    return [
      {
        'type': 'TEXT',
        'content': this.textItem.getContent()
      },
      {
        'type': 'IMAGE',
        'url': this.imageItem.getUrlImage()
      }
    ];
  }
}
