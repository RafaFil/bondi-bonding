import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlockDialogComponent } from '../block-dialog/block-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-chat-feed-header',
  templateUrl: './chat-feed-header.component.html',
  styleUrls: ['./chat-feed-header.component.sass']
})
export class ChatFeedHeaderComponent implements OnInit {

  @Input() title !: string;
  @Input() showIcons : boolean = true;

  //@ViewChild('menuTrigger') menuTrigger !: MatMenuTrigger;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openBlockDialog(){
    const dialogRef = this.dialog.open(BlockDialogComponent);
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus())
  }

  openDeleteDialog(){
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus())
  }

  openSnackBarPermanentRequest(){
    this.snackBar.open(`Permanent chat request sent to user ${this.title}`, '' ,{
      duration: 3000,
    });
  }
}
