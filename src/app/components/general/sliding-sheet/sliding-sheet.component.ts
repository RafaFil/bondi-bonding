import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { HomeButtonsService } from 'src/app/services/home-buttons.service';

@Component({
  selector: 'app-sliding-sheet',
  templateUrl: './sliding-sheet.component.html',
  styleUrls: ['./sliding-sheet.component.sass']
})
export class SlidingSheetComponent implements OnInit {
  slideClass: 'bb-show' | 'bb-hide' | '' = '';
  isShowing: boolean = false;

  @Output() sheetHide = new EventEmitter();

  @ViewChild('slidingSection')
  slidingSection?: ElementRef;

  constructor(private homeButtonsService: HomeButtonsService) {}

  ngOnInit(): void { }

  show($event?: Event) {
    $event?.stopPropagation();
    this.slideClass = 'bb-show';
    this.isShowing = true;
    this.homeButtonsService.showButtons = false;

    // Enable click out after sheet has been shown
  }

  hide() {
    if (!this.isShowing) return;

    this.slideClass = 'bb-hide';
    this.homeButtonsService.showButtons = true;

    this.sheetHide.emit();
    // resets css class after animation has ended
    setTimeout(() => {
      this.slideClass = '';
      this.isShowing = false;
    }, 350);
  }
}
