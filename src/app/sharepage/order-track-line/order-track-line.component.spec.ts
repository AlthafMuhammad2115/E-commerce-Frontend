import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackLineComponent } from './order-track-line.component';

describe('OrderTrackLineComponent', () => {
  let component: OrderTrackLineComponent;
  let fixture: ComponentFixture<OrderTrackLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderTrackLineComponent]
    });
    fixture = TestBed.createComponent(OrderTrackLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
