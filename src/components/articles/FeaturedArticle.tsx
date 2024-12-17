import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../types/article';

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-full min-h-[300px]">
          <img 
            src={article.image} 
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {article.readTime} min read
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {article.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {article.excerpt}
          </p>
          
          <button 
            onClick={() => navigate(`/article/${article.id}`)}
            className="group inline-flex items-center text-green-600 font-medium hover:text-green-700"
          >
            Read Full Article 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}