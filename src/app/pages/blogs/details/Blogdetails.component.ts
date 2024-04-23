import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationsService } from '../../../core/TransaltionService/translations.service';
import { Observable } from 'rxjs';
import { Blog } from '../blog';
import {
  TRANSLOCO_ALIAS_BLOGS,
  TRANSLOCO_SCOPE_BLOGS_PROVIDER,
} from '../blogs-scope.transloco';

@Component({
  selector: 'app-details',
  templateUrl: './Blogdetails.component.html',
  styleUrls: ['./Blogdetails.component.scss'],
  providers: [TRANSLOCO_SCOPE_BLOGS_PROVIDER],
})
export class BlogdetailsComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_BLOGS}.blogs`;
  public blogs!: Observable<Array<Blog>>;
  private route = inject(ActivatedRoute);

  constructor(private Translate: TranslationsService) {}

  ngOnInit() {
    console.log('ngOnInit');
    setTimeout(() => {
      this.extracted();
    }, 100);
  }

  private extracted() {
    this.route.queryParams.subscribe(param => {
      let id = param['id'] as string;
      if (!param) return;
      console.log('Blog ID:', id);
      // Retrieve the 'id' parameter from the URL
      let blog = this.Translate.GetByID<Blog>(this.i18nPath, 'article', id);
      console.log(blog.content);
      // Now, this.blogId contains the value of the 'id' parameter
    });
  }
}
