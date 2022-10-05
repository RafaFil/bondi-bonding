import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-password-updated-dialog',
  templateUrl: './password-updated-dialog.component.html',
  styleUrls: ['./password-updated-dialog.component.sass']
})
export class PasswordUpdatedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public isPasswordUpdated: boolean) {
  }

  ngOnInit(): void {
  }

}
