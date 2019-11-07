import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoImageItemsComponent } from './two-image-items.component';

describe('TwoImageItemsComponent', () => {
  let component: TwoImageItemsComponent;
  let fixture: ComponentFixture<TwoImageItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoImageItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoImageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
