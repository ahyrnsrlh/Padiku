import React from 'react';
import { BentoLayout } from './layouts/BentoLayout';
import { Navigation } from './components/navigation/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-gray-900">
      <Navigation />
      <main>
        <BentoLayout />
      </main>
    </div>
  );
}

export default App;