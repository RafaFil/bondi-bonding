import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFeedHeaderComponent } from './chat-feed-header.component';

describe('ChatFeedHeaderComponent', () => {
  let component: ChatFeedHeaderComponent;
  let fixture: ComponentFixture<ChatFeedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatFeedHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFeedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
