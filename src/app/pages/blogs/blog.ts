export interface Blog {
  image: Pick<HTMLImageElement, 'src' | 'alt'>;
  title: string;
  content: string;
}
