import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogItemsComponent } from './blog-items/blog-items.component';
import { TranslocoRootModule } from '../../transloco-root.module';
import { TranslocoDirective } from '@ngneat/transloco';
import { BlogdetailsComponent } from './details/Blogdetails.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [BlogsComponent, BlogItemsComponent, BlogdetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslocoRootModule,
    NgOptimizedImage,
    TranslocoDirective,
    RouterLink,
  ],
})
export class BlogsModule {}
