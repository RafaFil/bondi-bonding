import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { BlockDialogComponent } from '../block-dialog/block-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Chat, User } from 'src/app/modules/core/interfaces';
import { ChatService } from 'src/app/modules/core/services/chat.service';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
  selector: 'app-chat-feed-header',
  templateUrl: './chat-feed-header.component.html',
  styleUrls: ['./chat-feed-header.component.sass']
})
export class ChatFeedHeaderComponent implements OnInit {

  @Input() chat?: Chat;
  @Input() title!: string;
  @Input() showMenu: boolean = true;
  @Input() showBack: boolean = false;

  get to(): User | undefined {
    for (const user of this.chat?.members!) {
      if (user.username !== this.authService.runningUser?.username) {
        return user;
      }
    }

    return undefined;
  }

  get toolbarTitle(): string {
    return this.chat ? this.to?.name! : this.title;
  }

  constructor(public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router,
              private chatService: ChatService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  openBlockDialog() {
    this.dialog.open(BlockDialogComponent, {
      data: {
        afterBlockFn: () => {
          this.snackBar.open(`You have permanently blocked ${this.to?.name}.`, '', {
            duration: 3000
          });
          this.router.navigate(['/chat']);
        },
        userId: this.to?.uid,
        userName: this.to?.name
      }
    });
  }

  openDeleteDialog() {
    this.dialog.open(DeleteDialogComponent, {
      data: {
        afterDeleteFn: () => {
          this.snackBar.open(`Your chat with ${this.to?.name} has been deleted successfully.`, '', {
            duration: 3000
          });
          this.router.navigate(['/chat']);
        },
        chatId: this.chat?._id!
      }
    });
  }

  openSnackBarPermanentRequest(){
    this.chatService.createPermanentChatRequest(this.chat?._id!)
    .subscribe(() => {
      this.snackBar.open(`Permanent chat request sent to ${this.to?.name}`, '' ,{
        duration: 3000
      });
    });
  }

  navigateToProfile() {
    this.router.navigate([`/profile/${this.to?.username}`])
  }
}
