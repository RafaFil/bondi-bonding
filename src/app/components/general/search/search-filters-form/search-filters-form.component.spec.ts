import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFiltersFormComponent } from './search-filters-form.component';

describe('SearchFiltersFormComponent', () => {
  let component: SearchFiltersFormComponent;
  let fixture: ComponentFixture<SearchFiltersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFiltersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFiltersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
