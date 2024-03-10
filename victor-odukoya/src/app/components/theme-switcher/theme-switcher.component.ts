import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {

  public faSun: IconDefinition = faSun;
  public faMoon: IconDefinition = faMoon;

  toggleDarkTheme(checked: any) {
    console.log(checked);
  }
}
