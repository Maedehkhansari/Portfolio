import { Component } from '@angular/core';
import { TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  imports: [TranslateDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
