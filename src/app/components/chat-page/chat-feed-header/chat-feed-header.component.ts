import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { BlockDialogComponent } from '../block-dialog/block-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-chat-feed-header',
  templateUrl: './chat-feed-header.component.html',
  styleUrls: ['./chat-feed-header.component.sass']
})
export class ChatFeedHeaderComponent implements OnInit {

  @Input() title !: string;
  @Input() showIcons : boolean = true;

  //@ViewChild('menuTrigger') menuTrigger !: MatMenuTrigger;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openBlockDialog(){
    const dialogRef = this.dialog.open(BlockDialogComponent, {restoreFocus: false});
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus())
  }

  openDeleteDialog(){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {restoreFocus: false});
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus())
  }

}
