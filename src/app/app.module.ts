import { AppComponent } from './app.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { NotFoundComponent } from './pages/empty/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { BlogsModule } from './pages/blogs/blogs.module';
import { ContactModule } from './pages/contact/contact.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ThemeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    HomeModule,
    AboutModule,
    PortfolioModule,
    BlogsModule,
    ContactModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
