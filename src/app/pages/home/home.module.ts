import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslocoRootModule } from '../../transloco-root.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TranslocoRootModule, SharedModule, NgOptimizedImage],
})
export class HomeModule {}
