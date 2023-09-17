import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { TRANSLOCO_SCOPE_BLOGS_PROVIDER } from './blogs-scope.transloco';
import { TranslocoRootModule } from '../../transloco-root.module';
import { SharedModule } from '../../shared/shared.module';
import { BlogItemsComponent } from './blog-items/blog-items.component';

@NgModule({
  declarations: [BlogsComponent, BlogItemsComponent],
  imports: [CommonModule, TranslocoRootModule, SharedModule, NgOptimizedImage],
  providers: [TRANSLOCO_SCOPE_BLOGS_PROVIDER],
})
export class BlogsModule {}
