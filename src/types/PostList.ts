export interface Author {
    name: string;
    avatarUrl: string;
  }

export interface PostListType {
    _id: string;
    title: string;
    coverImageUrl: string;
    slug: string;
    author: Author;
    readingTime: number;
    commentsCount: number;
  }