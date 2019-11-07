import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Items } from '../../allegro/items';

@Component({
  selector: 'app-image-item-container',
  templateUrl: './image-item-container.component.html',
  styleUrls: ['./image-item-container.component.scss']
})
export class ImageItemContainerComponent implements OnInit, Items {
  @ViewChild('imageItem') input;
  @Input() images: any;
  constructor() { }

  ngOnInit() {
  }

  getItems(): any {
    return [{ 'type': 'IMAGE', 'url': this.input.getUrlImage() }];
  }
}
