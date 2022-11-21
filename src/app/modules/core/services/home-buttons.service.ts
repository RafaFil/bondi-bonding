import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeButtonsService {
  showButtons: boolean = true;

  constructor() { }
}
