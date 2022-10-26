import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/interfaces/Faq';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.sass']
})
export class FaqAccordionComponent implements OnInit {

  Faqs : Faq[] = [
    {question:"Question 1", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem, accusantium laudantium quaerat quo vero sequi nostrum tempore voluptatibus iusto dignissimos voluptates explicabo libero. Magnam neque reprehenderit nulla ut asperiores.",hint:"category or hint of a faq"},
    {question:"Question 2", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem, accusantium laudantium quaerat quo vero sequi nostrum tempore voluptatibus iusto dignissimos voluptates explicabo libero. Magnam neque reprehenderit nulla ut asperiores."},
    {question:"Question 3", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem, accusantium laudantium quaerat quo vero sequi nostrum tempore voluptatibus iusto dignissimos voluptates explicabo libero. Magnam neque reprehenderit nulla ut asperiores."},
    {question:"Question 4", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem, accusantium laudantium quaerat quo vero sequi nostrum tempore voluptatibus iusto dignissimos voluptates explicabo libero. Magnam neque reprehenderit nulla ut asperiores."},
    {question:"Question 5", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem, accusantium laudantium quaerat quo vero sequi nostrum tempore voluptatibus iusto dignissimos voluptates explicabo libero. Magnam neque reprehenderit nulla ut asperiores."},
    {question:"Question 6", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem, accusantium laudantium quaerat quo vero sequi nostrum tempore voluptatibus iusto dignissimos voluptates explicabo libero. Magnam neque reprehenderit nulla ut asperiores."},
    {question:"Question 7", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem, accusantium laudantium quaerat quo vero sequi nostrum tempore voluptatibus iusto dignissimos voluptates explicabo libero. Magnam neque reprehenderit nulla ut asperiores."},
  ];

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
