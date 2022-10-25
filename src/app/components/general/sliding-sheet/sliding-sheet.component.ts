import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HomeButtonsService } from 'src/app/services/home-buttons.service';

@Component({
  selector: 'app-sliding-sheet',
  templateUrl: './sliding-sheet.component.html',
  styleUrls: ['./sliding-sheet.component.sass']
})
export class SlidingSheetComponent implements OnInit {
  slideClass: 'bb-show' | 'bb-hide' | '' = '';
  isShowing: boolean = false;

  @ViewChild('slidingSection')
  slidingSection?: ElementRef;

  constructor(private homeButtonsService: HomeButtonsService) {}

  ngOnInit(): void { }

  public show($event?: Event) {
    $event?.stopPropagation();
    this.slideClass = 'bb-show';
    this.isShowing = true;
    this.homeButtonsService.showButtons = false;

    // Enable click out after sheet has been shown
  }

  public hide() {
    if (!this.isShowing) return;

    this.slideClass = 'bb-hide';
    this.homeButtonsService.showButtons = true;

    // resets css class after animation has ended
    setTimeout(() => {
      this.slideClass = '';
      this.isShowing = false;
    }, 400);
  }

}
