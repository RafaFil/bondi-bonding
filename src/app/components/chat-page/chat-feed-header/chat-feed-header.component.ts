import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlockDialogComponent } from '../block-dialog/block-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Chat } from 'src/app/interfaces';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-feed-header',
  templateUrl: './chat-feed-header.component.html',
  styleUrls: ['./chat-feed-header.component.sass']
})
export class ChatFeedHeaderComponent implements OnInit {

  @Input() chat!: Chat;
  @Input() title!: string;
  @Input() showMenu: boolean = true;

  get toolbarTitle(): string {
    return this.chat ? this.chat.to?.name! : this.title;
  }

  constructor(public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router,
              private chatService: ChatService) { }

  ngOnInit(): void {
  }

  openBlockDialog() {
    this.dialog.open(BlockDialogComponent, {
      data: {
        afterBlockFn: () => {
          this.snackBar.open(`You have permanently blocked ${this.chat.to?.name}.`, '', {
            duration: 3000
          });
          this.router.navigate(['/chat']);
        },
        userId: this.chat.to?.uid,
        userName: this.chat.to?.name
      }
    });
  }

  openDeleteDialog() {
    this.dialog.open(DeleteDialogComponent, {
      data: {
        afterDeleteFn: () => {
          this.snackBar.open(`Your chat with ${this.chat.to?.name} has been deleted successfully.`, '', {
            duration: 3000
          });
          this.router.navigate(['/chat']);
        },
        chatId: this.chat.id
      }
    });
  }

  openSnackBarPermanentRequest(){
    this.chatService.createPermanentChatRequest(this.chat.id)
    .subscribe(() => {
      this.snackBar.open(`Permanent chat request sent to ${this.chat.to?.name}`, '' ,{
        duration: 3000
      });
    });
  }
}
