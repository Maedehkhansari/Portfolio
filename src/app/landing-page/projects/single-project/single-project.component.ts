import { Component, Input } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  imports: [PrimaryButtonComponent, TranslatePipe],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() singleProject!: {
    name: string;
    description: string;
    image: string;
    github: string;
    link: string;
    tools: string[];
  };

  @Input() isEven: boolean = false;
}
