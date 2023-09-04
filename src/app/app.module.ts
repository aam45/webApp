import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { NotFoundComponent } from './pages/empty/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { ControlsComponent } from './pages/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    BlogsComponent,
    ContactComponent,
    ControlsComponent,
    ThemeComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, NgOptimizedImage, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
