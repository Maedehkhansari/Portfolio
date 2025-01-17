import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-red-ball',
  imports: [CommonModule],
  templateUrl: './red-ball.component.html',
  styleUrl: './red-ball.component.scss',
})
export class RedBallComponent {
  @Input() width = '0px';

  @Input() top = 'auto';

  @Input() bottom = 'auto';

  @Input() right = 'auto';

  @Input() left = 'auto';

  @Input() zIndex = 10;

  @Input() hiddenSize = 0;

  @Input() isVisible = true;

  ngOnInit() {
    this.updateVisibility(window.innerWidth); // Initial check
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibility(event.target.innerWidth);
  }

  private updateVisibility(width: number): void {
    this.isVisible = width > this.hiddenSize; // Hide if the width is less than or equal to 600px
  }
}
