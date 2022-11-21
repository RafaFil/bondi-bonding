import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultContentComponent } from './search-result-content.component';

describe('SearchResultContentComponent', () => {
  let component: SearchResultContentComponent;
  let fixture: ComponentFixture<SearchResultContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
