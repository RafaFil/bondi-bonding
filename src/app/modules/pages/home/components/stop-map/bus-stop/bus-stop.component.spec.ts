import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStopComponent } from './bus-stop.component';

describe('BusStopComponent', () => {
  let component: BusStopComponent;
  let fixture: ComponentFixture<BusStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusStopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
