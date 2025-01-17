import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  @Input() buttonText!: string;

  @Input() isDisable: boolean | null = false;

  @Input() buttonType: string = "button";
}
