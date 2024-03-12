import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';
import { CustomScullyRoute } from 'src/app/interfaces/custom-scully-route.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  publishedScullyRoutes: Observable<CustomScullyRoute[]> = this.scullyRoutesService.available$.pipe(
    map((routes) => routes.filter((r) => r.published) as CustomScullyRoute[])
  );

  constructor(private scullyRoutesService: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.publishedScullyRoutes.subscribe((links) => {
      console.log(links);
    });
  }
}
