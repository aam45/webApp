import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app.constants';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/empty/not-found.component';
import { BlogdetailsComponent } from './pages/blogs/details/Blogdetails.component';

const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    component: HomeComponent,
  },
  {
    path: APP_ROUTES.ABOUT,
    component: AboutComponent,
  },
  {
    path: APP_ROUTES.PORTFOLIO,
    component: PortfolioComponent,
  },
  {
    path: APP_ROUTES.BLOGS,
    component: BlogsComponent,
  },
  {
    path: APP_ROUTES.CONTACT,
    component: ContactComponent,
  },
  {
    path: APP_ROUTES.CONTACT,
    component: ContactComponent,
  },
  {
    path: APP_ROUTES.BLOGS_DETAILS,
    component: BlogdetailsComponent,
  },
  { path: '', redirectTo: APP_ROUTES.HOME, pathMatch: 'full' },
  {
    path: APP_ROUTES.NOT_FOUND,
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
