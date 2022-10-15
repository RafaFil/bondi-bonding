import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.sass']
})
export class ChatViewComponent implements OnInit {

  isMobile !: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) { 
}

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.observe(Breakpoints.Handset);
  }

}
