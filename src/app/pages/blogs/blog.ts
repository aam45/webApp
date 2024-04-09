export interface Blog {
  id: number;
  title: string;
  content: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}
