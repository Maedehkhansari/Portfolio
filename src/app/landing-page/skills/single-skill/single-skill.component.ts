import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-skill',
  imports: [],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss',
})
export class SingleSkillComponent {
  @Input() singleSkill!: {
    name: string;
    image: string;
  };
}
