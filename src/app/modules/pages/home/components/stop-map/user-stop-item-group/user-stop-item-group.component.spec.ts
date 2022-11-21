import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStopItemGroupComponent } from './user-stop-item-group.component';

describe('UserStopItemGroupComponent', () => {
  let component: UserStopItemGroupComponent;
  let fixture: ComponentFixture<UserStopItemGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStopItemGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStopItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
