import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { NgOptimizedImage } from '@angular/common';
import { ControlsComponent } from './controls/controls.component';
import { ThemeComponent } from './theme/theme.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    BlogsComponent,
    ContactComponent,
    ControlsComponent,
    ThemeComponent,
    EmptyComponent,
  ],
  imports: [BrowserModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
