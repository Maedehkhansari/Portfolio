import { Component } from '@angular/core';
import { RedBallComponent } from '../components/red-ball/red-ball.component';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';

@Component({
  selector: 'app-about',
  imports: [RedBallComponent, PrimaryButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
