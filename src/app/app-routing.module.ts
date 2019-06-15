import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogMainComponent } from './components/blog/blog-main/blog-main.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogMainComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        routes
        // { enableTracing: true }
      )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
