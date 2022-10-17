import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sliding-sheet',
  templateUrl: './sliding-sheet.component.html',
  styleUrls: ['./sliding-sheet.component.sass']
})
export class SlidingSheetComponent implements OnInit {
  slideClass: 'bb-show' | 'bb-hide' | '' = '';

  get isShowing(): boolean {
    return this.slideClass === 'bb-show';
  }

  @ViewChild('slidingSection')
  slidingSection?: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('document:click', ['$event'])
  handleClickOut($event: MouseEvent) {
    if (!this.isShowing) return;

    if (this.slidingSection?.nativeElement.contains($event.target)) return;

    const targets = $event.composedPath() as HTMLElement[];
    if (targets.find(elem => elem.className === 'cdk-overlay-container')) return;


    this.hide();
  }

  public show($event?: Event) {
    $event?.stopPropagation();
    this.slideClass = 'bb-show';
  }

  public hide() {
    if (!this.isShowing) return;

    this.slideClass = 'bb-hide';

    // resets css class after animation has ended
    setTimeout(() => this.slideClass = '', 400);
  }

}
