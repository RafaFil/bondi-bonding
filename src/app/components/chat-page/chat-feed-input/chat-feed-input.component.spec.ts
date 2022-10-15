import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFeedInputComponent } from './chat-feed-input.component';

describe('ChatFeedInputComponent', () => {
  let component: ChatFeedInputComponent;
  let fixture: ComponentFixture<ChatFeedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatFeedInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFeedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
