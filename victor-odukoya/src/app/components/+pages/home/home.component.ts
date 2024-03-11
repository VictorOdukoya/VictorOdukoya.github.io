import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  publishedScullyRoutes: Observable<ScullyRoute[]> = this.scullyRoutesService.available$.pipe(
    map((routes: ScullyRoute[]) => routes.filter((r) => r.published))
  );

  constructor(private scullyRoutesService: ScullyRoutesService) {}
  public faLayerGroup: IconDefinition = faLayerGroup;

  ngOnInit() {
    // debug current pages
    this.publishedScullyRoutes.subscribe((links) => {
      console.log(links);
    });
  }
}
