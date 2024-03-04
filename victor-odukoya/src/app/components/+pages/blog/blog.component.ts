import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  publishedScullyRoutes: Observable<ScullyRoute[]> = this.scullyRoutesService.available$.pipe(
    map((routes: ScullyRoute[]) => routes.filter((r) => r.published))
  );

  constructor(private scullyRoutesService: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.publishedScullyRoutes.subscribe((links) => {
      console.log(links);
    });
  }
}
