import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersModalContentComponent } from './filters-modal-content.component';

describe('FiltersModalContentComponent', () => {
  let component: FiltersModalContentComponent;
  let fixture: ComponentFixture<FiltersModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
