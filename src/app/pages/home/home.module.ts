import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { TRANSLOCO_SCOPE_HOME_PROVIDER } from './home-scope.transloco';
import { TranslocoRootModule } from '../../transloco-root.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TranslocoRootModule, SharedModule, NgOptimizedImage],
  providers: [TRANSLOCO_SCOPE_HOME_PROVIDER],
})
export class HomeModule {}
