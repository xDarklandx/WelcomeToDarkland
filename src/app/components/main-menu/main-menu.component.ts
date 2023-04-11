import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const leftDiv = this.elRef.nativeElement.querySelector('.left');
    const rightDiv = this.elRef.nativeElement.querySelector('.right');
    const middleDiv = this.elRef.nativeElement.querySelector('.middle');

    rightDiv.addEventListener('mouseover', () => {
      leftDiv.style.width = '30vw';
      rightDiv.style.width = '70vw';
      middleDiv.style.top = '-25%';
    });

    leftDiv.addEventListener('mouseover', () => {
      leftDiv.style.width = '70vw';
      rightDiv.style.width = '30vw';
      middleDiv.style.top = '-25%';
    });

    rightDiv.addEventListener('mouseleave', () => {
      leftDiv.style.width = '50vw';
      rightDiv.style.width = '50vw';
      middleDiv.style.top = '5%';
    });

    leftDiv.addEventListener('mouseleave', () => {
      leftDiv.style.width = '50vw';
      rightDiv.style.width = '50vw';
      middleDiv.style.top = '5%';
    });
  }

  ngOnInit(): void {}
}
