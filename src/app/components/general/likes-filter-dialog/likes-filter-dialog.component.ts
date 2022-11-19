import { Component, OnInit } from '@angular/core';
import { LIKES_OPTIONS } from 'src/app/interfaces';

@Component({
  selector: 'app-likes-filter-dialog',
  templateUrl: './likes-filter-dialog.component.html',
  styleUrls: ['./likes-filter-dialog.component.sass']
})
export class LikesFilterDialogComponent implements OnInit {

  likesOptions = LIKES_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
