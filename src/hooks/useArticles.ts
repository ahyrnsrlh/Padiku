import { useState, useEffect } from 'react';
import { Article } from '../types/article';
import { articles } from '../data/articles';

export function useArticles() {
  const [featuredArticle, setFeaturedArticle] = useState<Article>(articles[0]);
  const [otherArticles, setOtherArticles] = useState<Article[]>(articles.slice(1));

  useEffect(() => {
    // You could fetch articles from an API here
    setFeaturedArticle(articles[0]);
    setOtherArticles(articles.slice(1));
  }, []);

  return {
    articles: otherArticles,
    featuredArticle,
    allArticles: articles
  };
}