import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';
import { RedBallComponent } from '../components/red-ball/red-ball.component';

@Component({
  selector: 'app-contact',
  imports: [PrimaryButtonComponent, RedBallComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
