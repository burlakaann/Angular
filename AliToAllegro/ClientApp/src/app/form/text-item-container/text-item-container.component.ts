import { Component, OnInit, ViewChild } from '@angular/core';
import { Items } from 'src/app/allegro/items';

@Component({
  selector: 'app-text-item-container',
  templateUrl: './text-item-container.component.html',
  styleUrls: ['./text-item-container.component.scss']
})
export class TextItemContainerComponent implements OnInit, Items {
  @ViewChild('textItem') textItem;

  constructor() { }

  ngOnInit() {
  }

  getItems(): any {
    return [
      {
        'type': 'TEXT',
        'content': this.textItem.getContent()
      }
    ];
  }
}
