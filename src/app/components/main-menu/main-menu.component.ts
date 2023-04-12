import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  buttonVisible: boolean = false;
  buttonVisibleInterval: any;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const container = this.elRef.nativeElement.querySelector('.container');
    const leftDiv = this.elRef.nativeElement.querySelector('.left');
    const rightDiv = this.elRef.nativeElement.querySelector('.right');
    const middleDiv = this.elRef.nativeElement.querySelector('.middle');
    // const button = this.elRef.nativeElement.querySelector('.button');
    // const buttons = this.elRef.nativeElement.querySelectorAll('.button');

    // button.style.display = 'none';

    container.addEventListener('mouseover', (event: MouseEvent) => {
      if (event.target === leftDiv) {
        leftDiv.style.width = '70vw';
        rightDiv.style.width = '30vw';
        middleDiv.style.top = '-25%';
        this.buttonVisible = true;
      } else if (event.target === rightDiv) {
        leftDiv.style.width = '30vw';
        rightDiv.style.width = '70vw';
        middleDiv.style.top = '-25%';
        this.buttonVisible = true;
      }
    });

    container.addEventListener('mouseleave', () => {
      leftDiv.style.width = '50vw';
      rightDiv.style.width = '50vw';
      middleDiv.style.top = '5%';
      this.buttonVisible = false;
    });

    // toggle button visibility
    // this.buttonVisibleInterval = setInterval(() => {
    //   for (let i = 0; i < buttons.length; i++) {
    //     if (this.buttonVisible) {
    //       buttons[i].classList.remove('hidden');
    //     } else {
    //       buttons[i].classList.add('hidden');
    //     }
    //   }
    // }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.buttonVisibleInterval);
  }

  ngOnInit(): void {}
}
