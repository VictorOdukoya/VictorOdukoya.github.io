import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillCardContainerComponent } from '../../skill-card-container/skill-card-container.component';
import { SkillCardComponent } from '../../skill-card-container/skill-card/skill-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule, SkillCardContainerComponent, SkillCardComponent]
})
export class HomeModule {}
