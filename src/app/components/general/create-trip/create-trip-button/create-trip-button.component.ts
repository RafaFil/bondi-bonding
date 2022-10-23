import { Component, OnInit } from '@angular/core';
import { HomeButtonsService } from 'src/app/services/home-buttons.service';

@Component({
  selector: 'app-create-trip-button',
  templateUrl: './create-trip-button.component.html',
  styleUrls: ['./create-trip-button.component.sass']
})
export class CreateTripButtonComponent implements OnInit {

  get hideAnimationSelector(): '' | 'bb-hide-home-btn' {
    return this.homeButtonsService.showButtons ? '' : 'bb-hide-home-btn';
  }

  constructor(public homeButtonsService: HomeButtonsService) { }

  ngOnInit(): void {
  }

}
