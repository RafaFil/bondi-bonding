import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsListComponent } from './chats-list.component';

describe('ChatsListComponent', () => {
  let component: ChatsListComponent;
  let fixture: ComponentFixture<ChatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
