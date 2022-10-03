import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-image',
  templateUrl: './logo-image.component.html',
  styleUrls: ['./logo-image.component.sass']
})
export class LogoImageComponent implements OnInit {

  src = "../../../../assets/images/logo.png"; //chek this out

  constructor() { }

  ngOnInit(): void {
  }

}
