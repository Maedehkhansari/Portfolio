import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateDirective } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router, private location: Location) {
    // Listen for navigation end to catch when coming back to index
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = window.location.hash.substring(1);
      if (fragment) {
        setTimeout(() => this.scrollToElement(fragment), 100); // Delay to ensure element is loaded
      }
    });
  }

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

  @ViewChild('menuRef') menuElement!: ElementRef;

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
      primaryColor: '#5988FF',
      secondaryColor: '#0043F0',
      shadowColor: '#EAF0FF',
      svgIconColor: 'hue-rotate(215deg) brightness(1)',
    },
    {
      primaryColor: '#FF5959',
      secondaryColor: '#DE0000',
      shadowColor: '#FFEAEA',
      svgIconColor: 'hue-rotate(0deg) brightness(1)',
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

  ngAfterViewInit() {
    setTimeout(() => {
      this.assignWidthForMenuLink();
    }, 1000);
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
    setTimeout(() => {
      this.assignWidthForMenuLink();
    }, 30);
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
    if (this.isChecked === true) {
      setTimeout(() => {
        this.changeLogo();
        this.isChecked = false;
      }, 100);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    this.isFixed = window.scrollY > 600 ? true : this.isChecked;
    this.showColoredLogo = window.scrollY > 600 ? true : this.isChecked;
  }

  scrollToElementWithOffset(event: Event, targetId: string) {
    event.preventDefault();

    const isIndexPage = this.router.url === '/' || this.router.url.startsWith('/#');
    if (isIndexPage) {
      this.router.navigate([], { fragment: targetId, replaceUrl: true });
      this.scrollToElement(targetId);
    } else {
      this.router.navigate(['/'], { fragment: targetId });
    }
  }

  scrollToElement(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - 120,
        behavior: 'smooth',
      });
    }
  }

  assignWidthForMenuLink() {
    const links = this.menuElement.nativeElement.querySelectorAll('a span');
    links.forEach((link: HTMLAnchorElement) => {
      link.style.width = '';
      const widthOfLink = link.offsetWidth;
      const rect = link.getBoundingClientRect();
      link.style.width = widthOfLink + 'px';
    });
  }
}
