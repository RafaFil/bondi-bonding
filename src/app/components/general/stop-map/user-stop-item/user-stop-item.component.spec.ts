import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStopItemComponent } from './user-stop-item.component';

describe('UserStopItemComponent', () => {
  let component: UserStopItemComponent;
  let fixture: ComponentFixture<UserStopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStopItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
