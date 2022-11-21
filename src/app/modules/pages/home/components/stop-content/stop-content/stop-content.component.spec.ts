import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopContentComponent } from './stop-content.component';

describe('StopContentComponent', () => {
  let component: StopContentComponent;
  let fixture: ComponentFixture<StopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
