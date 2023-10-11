export type BooksDTO = {
  totalItems: number;
  items: BookInfo[];
};

export type BookInfo = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
};
