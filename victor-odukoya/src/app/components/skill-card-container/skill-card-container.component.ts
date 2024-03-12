import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillCardComponent } from './skill-card/skill-card.component';

@Component({
  selector: 'app-skill-card-container',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './skill-card-container.component.html',
  styleUrls: ['./skill-card-container.component.scss']
})
export class SkillCardContainerComponent {

}
