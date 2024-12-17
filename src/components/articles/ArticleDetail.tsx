import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { useArticle } from '../../hooks/useArticle';
import { Button } from '../ui/Button';

export function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = useArticle(id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Article not found
          </h2>
          <Button onClick={() => navigate('/')} icon={ArrowLeft}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <Button 
        variant="secondary"
        onClick={() => navigate('/')} 
        icon={ArrowLeft}
        className="mb-8"
      >
        Back to Articles
      </Button>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime} min read
              </span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="flex gap-2 mb-8">
            {article.tags.map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </div>
    </article>
  );
}