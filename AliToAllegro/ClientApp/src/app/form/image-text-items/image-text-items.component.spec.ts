import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextItemsComponent } from './image-text-items.component';

describe('ImageTextItemsComponent', () => {
  let component: ImageTextItemsComponent;
  let fixture: ComponentFixture<ImageTextItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTextItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
