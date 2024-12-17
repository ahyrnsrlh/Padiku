import { useState, useEffect } from 'react';
import { Article } from '../types/article';
import { articles } from '../data/articles';

export function useArticle(id: string | undefined) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      const foundArticle = articles.find(a => a.id === id);
      setArticle(foundArticle || null);
    }
  }, [id]);

  return article;
}