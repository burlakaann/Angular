import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextItemContainerComponent } from './text-item-container.component';

describe('TextItemContainerComponent', () => {
  let component: TextItemContainerComponent;
  let fixture: ComponentFixture<TextItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
