import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsViewComponent } from './pages/chats-view/chats-view.component';
import { ChatViewComponent } from './pages/chat-view/chat-view.component';
import { BlockDialogComponent } from './components/block-dialog/block-dialog.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';
import { ChatFeedHeaderComponent } from './components/chat-feed-header/chat-feed-header.component';
import { ChatFeedInputComponent } from './components/chat-feed-input/chat-feed-input.component';
import { ChatPreviewComponent } from './components/chat-preview/chat-preview.component';
import { ChatsListComponent } from './components/chats-list/chats-list.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { SpeechBubbleComponent } from './components/speech-bubble/speech-bubble.component';
import { ChatRoutingModule } from './chat-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ChatsViewComponent,
    ChatViewComponent,
    BlockDialogComponent,
    ChatFeedComponent,
    ChatFeedHeaderComponent,
    ChatFeedInputComponent,
    ChatPreviewComponent,
    ChatsListComponent,
    DeleteDialogComponent,
    SpeechBubbleComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ChatModule { }
