import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPostComponent } from '../../blog-post/blog-post.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogPostComponent,
  },
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: '**',
    component: BlogPostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

