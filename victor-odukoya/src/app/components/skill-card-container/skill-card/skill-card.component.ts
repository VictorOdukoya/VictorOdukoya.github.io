import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ['../skill-card-container.component.scss']
})
export class SkillCardComponent {
  @Input() icon: IconDefinition;
  @Input() title: string;
  @Input() description: string;
}
