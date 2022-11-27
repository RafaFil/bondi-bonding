import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BusStop, SearchResult, Trip } from 'src/app/modules/core/interfaces';
import { ChatService } from 'src/app/modules/core/services/chat.service';
import { HomeButtonsService } from 'src/app/modules/core/services/home-buttons.service';

@Component({
  selector: 'app-search-result-content',
  templateUrl: './search-result-content.component.html',
  styleUrls: ['./search-result-content.component.sass']
})
export class SearchResultContentComponent implements OnInit {
  selectedTrip?: Trip;

  @Input() searchResult!: SearchResult;

  @Output() stopChange = new EventEmitter<BusStop>;

  constructor(private router: Router,
              private chatService: ChatService,
              private snackBar: MatSnackBar,
              private homeBtns: HomeButtonsService) { }

  ngOnInit(): void {
  }

  handleStartChat(trip: Trip): void {
    this.chatService.getChatByMembers(trip.user?.username!)
    .subscribe(result => {
      if (result.success) {
        this.homeBtns.showButtons = true;
        this.router.navigate([`/chat/${result.data!._id}`]);
        return;
      }

      this.chatService.createChat(trip.user?.username!)
      .subscribe(result => {
        if (result.success) {
          this.homeBtns.showButtons = true;
          this.router.navigate([`/chat/${result.data}`]);
          return;
        }

        this.snackBar.open(
          'An error ocurred while trying to start the chat. Please try again later.',
          '',
          { duration: 3000 }
        );
      });
    });
  }

  handleTripChange(newTrip: Trip) {
    this.selectedTrip = newTrip;
    this.stopChange.emit(newTrip.stop!);
  }
}
