import { FaqService } from './../../../services/faq.service';
import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/interfaces';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.sass']
})
export class FaqAccordionComponent implements OnInit {
  faqs?: Faq[];
  panelOpenState = false;
  faqsExist = true;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.faqService.getFaqs()
    .subscribe(faqs => {
      this.faqs = faqs.data;
      this.faqsExist = faqs.success;
    });
  }

  setPanelState(state: boolean) {
    this.panelOpenState = state;
  }
  
}
