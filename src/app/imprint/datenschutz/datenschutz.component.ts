import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-datenschutz',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss',
})
export class DatenschutzComponent {}
