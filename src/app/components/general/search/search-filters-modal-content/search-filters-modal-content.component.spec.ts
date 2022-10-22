import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFiltersModalContentComponent } from './search-filters-modal-content.component';

describe('SearchFiltersModalContentComponent', () => {
  let component: SearchFiltersModalContentComponent;
  let fixture: ComponentFixture<SearchFiltersModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFiltersModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFiltersModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
