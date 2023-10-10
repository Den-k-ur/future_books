export type BooksDTO = {
  totalItems: number;
  items: BooksInfo[];
};

type BooksInfo = {
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    desctiption: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
};
