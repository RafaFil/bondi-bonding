import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modules/core/interfaces';
import { ChatService } from 'src/app/modules/core/services/chat.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.sass']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private chatService: ChatService,
              private dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { chatId: string, afterDeleteFn: () => void }) { }

  ngOnInit(): void {
  }

  deleteChat(){
    this.chatService.deleteChat(this.data.chatId)
    .subscribe( () => {
      this.data.afterDeleteFn();
      this.dialogRef.close();
    });
  }

}
