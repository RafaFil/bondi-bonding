import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFiltersModalComponent } from './search-filters-modal.component';

describe('SearchFiltersModalComponent', () => {
  let component: SearchFiltersModalComponent;
  let fixture: ComponentFixture<SearchFiltersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFiltersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFiltersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
