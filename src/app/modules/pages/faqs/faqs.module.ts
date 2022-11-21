import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FaqAccordionComponent } from './components/faq-accordion/faq-accordion.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';


@NgModule({
  declarations: [
    FaqAccordionComponent,
    FaqPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FaqsRoutingModule
  ]
})
export class FaqsModule { }
