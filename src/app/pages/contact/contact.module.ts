import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TranslocoRootModule } from '../../transloco-root.module';
import { SharedModule } from '../../shared/shared.module';
import { TRANSLOCO_SCOPE_CONTACT_PROVIDER } from './contact-scope.transloco';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, TranslocoRootModule, SharedModule, NgOptimizedImage],
  providers: [TRANSLOCO_SCOPE_CONTACT_PROVIDER],
})
export class ContactModule {}
