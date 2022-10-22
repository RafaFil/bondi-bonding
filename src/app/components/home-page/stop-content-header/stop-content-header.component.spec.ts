import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopContentHeaderComponent } from './stop-content-header.component';

describe('StopContentHeaderComponent', () => {
  let component: StopContentHeaderComponent;
  let fixture: ComponentFixture<StopContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopContentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
