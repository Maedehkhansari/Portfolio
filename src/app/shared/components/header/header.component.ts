import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isChecked: boolean = false;

  redLogo = 'img/logo/small-logo-red.png';
  whiteLogo = 'img/logo/small-logo.png';

  closeMenu() {
    setTimeout(() => {
      this.isChecked = false;
    }, 100);
  }
}
