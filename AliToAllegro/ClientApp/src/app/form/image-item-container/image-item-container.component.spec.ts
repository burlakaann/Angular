import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageItemContainerComponent } from './image-item-container.component';

describe('ImageItemContainerComponent', () => {
  let component: ImageItemContainerComponent;
  let fixture: ComponentFixture<ImageItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
