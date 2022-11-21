import { Component, OnInit } from '@angular/core';
import { TosService } from 'src/app/modules/core/services/tos.service';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.sass']
})
export class TosComponent implements OnInit {

  tos?: string = "An error ocurred while loading ToS, please try again later.";
  tosExist?:boolean;

  constructor(public tosService: TosService) { }

  ngOnInit(): void {
    this.tosService.getTos().subscribe(
      tos => {
        this.tos = tos.data;
        this.tosExist = tos.success;
      });
  }
}
