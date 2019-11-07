import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[items-host]',
})
export class ItemsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
