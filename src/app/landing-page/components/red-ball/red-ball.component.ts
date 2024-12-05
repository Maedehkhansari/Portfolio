import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
