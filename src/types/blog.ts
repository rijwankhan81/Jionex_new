// types/blog.ts
export type BlogPost = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  content?: string;
  pdf?: string | null;
};
