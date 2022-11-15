import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsViewComponent } from './chats-view.component';

describe('ChatsViewComponent', () => {
  let component: ChatsViewComponent;
  let fixture: ComponentFixture<ChatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
