import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { HomeButtonsService } from 'src/app/services/home-buttons.service';

@Component({
  selector: 'app-sliding-sheet',
  templateUrl: './sliding-sheet.component.html',
  styleUrls: ['./sliding-sheet.component.sass']
})
export class SlidingSheetComponent implements OnInit {
  slideClass: 'bb-show' | 'bb-hide' | '' = '';
  enableClickOut: boolean = false;

  @ViewChild('slidingSection')
  slidingSection?: ElementRef;

  get isShowing(): boolean {
    return this.slideClass === 'bb-show';
  }

  constructor(private homeButtonsService: HomeButtonsService) { }

  ngOnInit(): void { }

  @HostListener('document:click', ['$event'])
  handleClickOut($event: MouseEvent) {
    if (!this.isShowing || !this.enableClickOut) return;

    if (this.slidingSection?.nativeElement.contains($event.target)) return;

    const targets = $event.composedPath() as HTMLElement[];
    if (targets.find(elem => elem.className === 'cdk-overlay-container')) return;

    this.hide();
  }

  public show($event?: Event) {
    $event?.stopPropagation();
    this.slideClass = 'bb-show';
    this.homeButtonsService.showButtons = false;

    // Don't enable click out until animation is over
    setTimeout(() => this.enableClickOut = true, 500);
  }

  public hide() {
    if (!this.isShowing) return;

    this.slideClass = 'bb-hide';
    this.enableClickOut = false;
    this.homeButtonsService.showButtons = true;

    // resets css class after animation has ended
    setTimeout(() => this.slideClass = '', 400);
  }

}
