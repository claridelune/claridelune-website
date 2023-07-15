import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { PostSchema } from '../content/config';

const postsDirectory = path.join(process.cwd(), 'content/journal');

export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: fileName.replace(/\.md$/, ''),
        content,
        ...data,
    } as unknown as PostSchema;
  });

  return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
      slug,
      content,
      ...data,
  } as unknown as PostSchema;
}