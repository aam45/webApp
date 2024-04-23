import { Component, Input, OnInit } from '@angular/core';
import { TranslationsService } from '../../../core/TransaltionService/translations.service';
import { Blog } from '../blog';
import { Observable, of } from 'rxjs';
import { NavigationService } from '../../../core/NavigationService/navigation.service';

@Component({
  selector: 'app-blog-items',
  templateUrl: './blog-items.component.html',
  styleUrls: ['./blog-items.component.scss'],
})
export class BlogItemsComponent implements OnInit {
  @Input() public i18nPath!: string;
  public blogs!: Observable<Array<Blog>>;

  constructor(
    private readonly transloco: TranslationsService,
    private readonly navigationService: NavigationService
  ) {}

  public goToBlog(blog: Blog): void {
    setTimeout(() => {
      console.log('Id:', blog.id);
      this.navigationService.blogDetails(blog.id);
    }, 100);
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.blogs = of(
        this.transloco.buildUpInterface<Array<Blog>>(
          this.i18nPath,
          'article',
          6
        )
      );
    }, 100);
  }
}
