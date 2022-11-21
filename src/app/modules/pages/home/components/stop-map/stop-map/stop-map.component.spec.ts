import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopMapComponent } from './stop-map.component';

describe('StopMapComponent', () => {
  let component: StopMapComponent;
  let fixture: ComponentFixture<StopMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
