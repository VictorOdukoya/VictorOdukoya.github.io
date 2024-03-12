import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogCardComponent } from '../../blog-card/blog-card.component';
import { BlogPostComponent } from '../../blog-post/blog-post.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent, BlogPostComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, BlogCardComponent],
})
export class BlogModule {}
