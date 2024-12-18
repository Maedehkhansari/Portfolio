import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() colorChanged = new EventEmitter<{
    primaryColor: string;
    secondaryColor: string;
    shadowColor: string;
    svgIconColor: string;
  }>();

  @Output() languageChanged = new EventEmitter<{
    title: string;
    value: string;
  }>();

  isFixed: boolean = false;
  isChecked: boolean = false;
  showColoredLogo: boolean = false;

  redLogo = 'img/logo/small-logo-red.png';
  whiteLogo = 'img/logo/small-logo.png';

  colorFromStorage = localStorage.getItem('mkSiteColor');
  selectedColor = this.colorFromStorage
    ? parseInt(this.colorFromStorage, 10)
    : 0;

  languageFromStorage = localStorage.getItem('mkSiteLanguage');
  selectedLanguage = this.languageFromStorage
    ? parseInt(this.languageFromStorage, 10)
    : 0;

  colors = [
    {
      primaryColor: '#FF5959',
      secondaryColor: '#DE0000',
      shadowColor: '#FFEAEA',
      svgIconColor: 'hue-rotate(0deg) brightness(1)',
    },
    {
      primaryColor: '#5988FF',
      secondaryColor: '#0043F0',
      shadowColor: '#EAF0FF',
      svgIconColor: 'hue-rotate(215deg) brightness(1)',
    },
    {
      primaryColor: '#57E8A2',
      secondaryColor: '#33B476',
      shadowColor: '#D7FFEC',
      svgIconColor: 'hue-rotate(140deg) brightness(1.3)',
    },
  ];

  languages = [
    {
      title: 'EN',
      value: 'en',
    },
    {
      title: 'DE',
      value: 'de',
    },
  ];

  ngOnInit(): void {
    this.loadSelectedColor();
    this.initColor();
    this.loadSelectedLanguage();
    this.initLanguage();
    this.checkScrollPosition();
  }

  loadSelectedColor(): void {
    const colorFromStorage = localStorage.getItem('mkSiteColor');
    this.selectedColor = colorFromStorage ? parseInt(colorFromStorage, 10) : 0;
  }

  initColor() {
    this.colorChanged.emit(this.colors[this.selectedColor]);
  }

  changeColor(): void {
    this.selectedColor =
      this.selectedColor < this.colors.length - 1 ? this.selectedColor + 1 : 0;
    localStorage.setItem('mkSiteColor', this.selectedColor.toString());
    this.initColor();
  }

  loadSelectedLanguage(): void {
    const languageFromStorage = localStorage.getItem('mkSiteLanguage');
    this.selectedLanguage = languageFromStorage
      ? parseInt(languageFromStorage, 10)
      : 0;
  }

  initLanguage() {
    this.languageChanged.emit(this.languages[this.selectedLanguage]);
  }

  changeLanguage(): void {
    this.selectedLanguage = this.selectedLanguage === 0 ? 1 : 0;
    localStorage.setItem('mkSiteLanguage', this.selectedLanguage.toString());
    this.initLanguage();
  }

  changeLogo() {
    if (window.scrollY > 600) {
      this.showColoredLogo = true;
    } else {
      this.showColoredLogo = !this.isChecked;
      this.isFixed = !this.isChecked;
    }
  }

  closeMenu() {
    setTimeout(() => {
      this.changeLogo();
      this.isChecked = false;
    }, 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    this.isFixed = window.scrollY > 600 ? true : this.isChecked;
    this.showColoredLogo = window.scrollY > 600 ? true : this.isChecked;
  }
}
