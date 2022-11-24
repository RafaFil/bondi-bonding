import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-signup-err-dialog',
  templateUrl: './signup-err-dialog.component.html',
  styleUrls: ['./signup-err-dialog.component.sass']
})
export class SignupErrDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public text: any) {
  }

  ngOnInit(): void {
  }

}
