import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./components/+pages/blog/blog.module').then((m) => m.BlogModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/+pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/+pages/about/about.module').then((m) => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
