import React from 'react';
import { HeroCard } from '../components/cards/HeroCard';
import { DiagnosisCard } from '../components/cards/DiagnosisCard';
import { StatsCard } from '../components/cards/StatsCard';
import { FeaturesCard } from '../components/cards/FeaturesCard';
import { AboutCard } from '../components/cards/AboutCard';
import { ContactCard } from '../components/cards/ContactCard';
import { WeatherCard } from '../components/weather/WeatherCard';
import { EducationSection } from '../components/articles/EducationSection';
import { ChatSection } from '../components/chat/ChatSection';

export function BentoLayout() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hero Section - Spans 2 columns */}
          <div className="md:col-span-2">
            <HeroCard />
          </div>

          {/* Weather Card */}
          <div className="lg:col-span-1">
            <WeatherCard />
          </div>

          {/* Diagnosis Tool - Spans full width */}
          <div className="md:col-span-2 lg:col-span-3">
            <DiagnosisCard />
          </div>

        

          {/* Education Section - Spans full width */}
          <div className="md:col-span-2 lg:col-span-3">
            <EducationSection />
          </div>

  {/* AI Chat Section - Spans full width */}
          <div className="md:col-span-2 lg:col-span-3">
            <ChatSection />
          </div>
          
          {/* Features Section */}
          <div className="md:col-span-1">
            <FeaturesCard />
          </div>

          {/* About Section */}
          <div className="md:col-span-1">
            <AboutCard />
          </div>

          {/* Stats Card */}
          <div className="md:col-span-1">
            <StatsCard />
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3">
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
}