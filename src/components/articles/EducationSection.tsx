import React from 'react';
import { FeaturedArticle } from './FeaturedArticle';
import { ArticleGrid } from './ArticleGrid';
import { useArticles } from '../../hooks/useArticles';

export function EducationSection() {
  const { featuredArticle } = useArticles();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Edukasi & Artikel
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Pelajari teknik terbaik dalam merawat tanaman padi dan kenali berbagai penyakit 
            yang mungkin menyerang melalui artikel-artikel edukatif kami.
          </p>
        </div>

        <div className="mb-12">
          <FeaturedArticle article={featuredArticle} />
        </div>

        <ArticleGrid />
      </div>
    </section>
  );
}