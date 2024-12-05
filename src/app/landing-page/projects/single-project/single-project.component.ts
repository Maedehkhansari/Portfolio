import { Component, Input } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-single-project',
  imports: [PrimaryButtonComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() singleProject!: {
    name: string;
    description: string;
    image: string;
    link: string;
    tools: string[];
  };

  @Input()isEven: boolean = false;
}
