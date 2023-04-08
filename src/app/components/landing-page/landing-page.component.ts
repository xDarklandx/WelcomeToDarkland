import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('cardHover', [
      state(
        'hovering',
        style({
          transform: 'scale(1.1)',
        })
      ),
      transition('* => hovering', animate('200ms ease-in')),
      transition('hovering => *', animate('200ms ease-out')),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {
  leftCardState = '';
  rightCardState = '';

  constructor() {}

  ngOnInit(): void {}
}
