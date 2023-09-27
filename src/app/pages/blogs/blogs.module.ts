import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogItemsComponent } from './blog-items/blog-items.component';
import { TranslocoRootModule } from '../../transloco-root.module';

@NgModule({
  declarations: [BlogsComponent, BlogItemsComponent],
  imports: [CommonModule, SharedModule, TranslocoRootModule, NgOptimizedImage],
})
export class BlogsModule {}
