import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-block-dialog',
  templateUrl: './block-dialog.component.html',
  styleUrls: ['./block-dialog.component.sass']
})
export class BlockDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { userId: string, userName: string, afterBlockFn: () => void }) { }

  ngOnInit(): void {
  }

  blockUser(): void {
    // TODO: Integrate with profileservice
    //this.profileService.blockUser(this.data.userId)
    //.subscribe( () => {
    //  this.data.afterBlockFn();
    //  this.dialogRef.close();
    //});
  }

}
