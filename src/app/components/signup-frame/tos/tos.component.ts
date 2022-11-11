import { Component, OnInit } from '@angular/core';
import { TosService } from 'src/app/services/tos.service';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.sass']
})
export class TosComponent implements OnInit {

  tos: string = '';

  constructor(public tosService: TosService) { }

  ngOnInit(): void {
    this.tosService.getTos().subscribe( tos => this.tos = tos );
  }
}
