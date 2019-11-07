import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageItemsComponent } from './text-image-items.component';

describe('TextImageItemsComponent', () => {
  let component: TextImageItemsComponent;
  let fixture: ComponentFixture<TextImageItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextImageItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextImageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
