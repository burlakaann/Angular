import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ItemsDirective } from './items.directive';
import { DescriptionItemsComponent } from '../description-items/description-items.component';

@Component({
  selector: 'app-description-container',
  templateUrl: './description-container.component.html',
  styleUrls: ['./description-container.component.scss']
})
export class DescriptionContainerComponent implements OnInit {
  @ViewChild(ItemsDirective, { read: ItemsDirective }) itemsHost: ItemsDirective;
  @Input() images: any;

  sections: Array<DescriptionItemsComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  this.sections = new Array<DescriptionItemsComponent>();
  }

  ngOnInit() {
    this.addNextItemsComponent();
  }

  addNextItemsComponent() {
    let descriptionItemsComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DescriptionItemsComponent);

    let viewContainerRef = this.itemsHost.viewContainerRef;

    let itemsComponentRef = viewContainerRef.createComponent(descriptionItemsComponentFactory);
    var descriptionItemsComponent: DescriptionItemsComponent = (<DescriptionItemsComponent>itemsComponentRef.instance);
    descriptionItemsComponent.images = this.images;

    this.sections.push(descriptionItemsComponent);
  }

  getDescription(): any {
    let sections = [];
    this.sections.forEach((section) => {
      sections.push(section.getItems());
    });
    return {
      'sections': sections
    };
  }
}
