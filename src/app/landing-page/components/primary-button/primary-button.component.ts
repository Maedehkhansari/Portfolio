import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  @Input() buttonText!: string;

  @Input() isDisable: boolean | null = false;

  @Input() buttonType: string = 'button';

  @Input() isColorSolid: boolean | null = false;
}
