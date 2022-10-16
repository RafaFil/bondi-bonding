import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStopMapComponent } from './home-stop-map.component';

describe('HomeStopMapComponent', () => {
  let component: HomeStopMapComponent;
  let fixture: ComponentFixture<HomeStopMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStopMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStopMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
