import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { BentoLayout } from './layouts/BentoLayout';
import { ArticleDetail } from './components/articles/ArticleDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f7f7f7] dark:bg-gray-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<BentoLayout />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;