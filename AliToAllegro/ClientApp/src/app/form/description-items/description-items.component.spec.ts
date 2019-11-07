import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionItemsComponent } from './description-items.component';

describe('DescriptionItemsComponent', () => {
  let component: DescriptionItemsComponent;
  let fixture: ComponentFixture<DescriptionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
