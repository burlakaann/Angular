import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionImageComponent } from './description-image.component';

describe('DescriptionImageComponent', () => {
  let component: DescriptionImageComponent;
  let fixture: ComponentFixture<DescriptionImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
