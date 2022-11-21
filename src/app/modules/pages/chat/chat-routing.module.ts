import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatViewComponent } from './pages/chat-view/chat-view.component';
import { ChatsViewComponent } from './pages/chats-view/chats-view.component';

const routes: Routes = [
  { path: '', component: ChatsViewComponent },
  { path: ':chatId', component: ChatViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
