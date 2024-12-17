import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../types/article';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {article.readTime} min read
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {article.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {article.excerpt}
        </p>
        
        <button 
          onClick={() => navigate(`/article/${article.id}`)}
          className="group flex items-center text-green-600 font-medium hover:text-green-700"
        >
          Read More 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}