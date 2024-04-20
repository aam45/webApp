export interface Blog {
  id: number;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;

  };
  tag: string;
  hashtag: string[];
  content: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}
