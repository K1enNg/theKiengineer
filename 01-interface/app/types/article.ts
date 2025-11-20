export interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  coverImage: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    avatar?: string | null;
  };
  createdAt: string;
  updatedAt: string;
}
