import React from 'react';
import { ArticleCard } from './ArticleCard';
import { useArticles } from '../../hooks/useArticles';

export function ArticleGrid() {
  const { articles } = useArticles();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}