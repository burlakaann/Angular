import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { ItemDirective } from './item.directive';
import { DescriptionTextComponent } from '../description-text/description-text.component';
import { DescriptionImageComponent } from '../description-image/description-image.component';
import { TextImageItemsComponent } from '../text-image-items/text-image-items.component';
import { ImageTextItemsComponent } from '../image-text-items/image-text-items.component';
import { ImageItemContainerComponent } from '../image-item-container/image-item-container.component';
import { TextItemContainerComponent } from '../text-item-container/text-item-container.component';
import { TwoImageItemsComponent } from '../two-image-items/two-image-items.component';
import { Items } from 'src/app/allegro/items';

@Component({
  selector: 'app-description-items',
  templateUrl: './description-items.component.html',
  styleUrls: ['./description-items.component.scss']
})
export class DescriptionItemsComponent implements OnInit {
  @Input() images: any;
  @ViewChild(ItemDirective, { read: ItemDirective }) itemHost: ItemDirective;
  items: Items;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.setTextComponent();
  }
  
  setTextImageComponents() {
    let textImageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TextImageItemsComponent);

    let viewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();

    let textImageComponentRef = viewContainerRef.createComponent(textImageComponentFactory);
    (<TextImageItemsComponent>textImageComponentRef.instance).images = this.images;

    this.items = <Items>textImageComponentRef.instance;
  }

  setImageTextComponents() {
    let imageTextComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ImageTextItemsComponent);

    let viewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();

    let imageTextComponentRef = viewContainerRef.createComponent(imageTextComponentFactory);
    (<ImageTextItemsComponent>imageTextComponentRef.instance).images = this.images;

    this.items = <Items>imageTextComponentRef.instance;
  }

  setImageComponent() {
    let imageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ImageItemContainerComponent);

    let viewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();

    let imageComponentRef = viewContainerRef.createComponent(imageComponentFactory);
    (<ImageItemContainerComponent>imageComponentRef.instance).images = this.images;

    this.items = <Items>imageComponentRef.instance;
  }

  setTextComponent() {
    let textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TextItemContainerComponent);

    let viewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();

    let textComponentRef = viewContainerRef.createComponent(textComponentFactory);

    this.items = <Items>textComponentRef.instance;
  }

  setTwoImageComponents() {
    let twoImagesComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TwoImageItemsComponent);

    let viewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();

    let twoImagesComponentRef = viewContainerRef.createComponent(twoImagesComponentFactory);
    (<TwoImageItemsComponent>twoImagesComponentRef.instance).images = this.images;

    this.items = <Items>twoImagesComponentRef.instance;
  }

  getItems(): any {
    return {
      'items': this.items.getItems()
    };
  }
}
