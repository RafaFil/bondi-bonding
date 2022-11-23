import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-signup-err-dialog',
  templateUrl: './signup-err-dialog.component.html',
  styleUrls: ['./signup-err-dialog.component.sass']
})
export class SignupErrDialogComponent implements OnInit {

  text = MAT_DIALOG_DATA.toString();

  constructor() { }

  ngOnInit(): void {
  }

}
