import React from 'react';
import Card from '../ui/Card';

interface Disease {
  name: string;
  symptoms: string[];
  causes: string;
  treatment: string;
  image?: string;
}

interface DiseaseCardProps {
  disease: Disease;
}

export default function DiseaseCard({ disease }: DiseaseCardProps) {
  return (
    <Card className="h-full">
      {disease.image && (
        <img 
          src={disease.image} 
          alt={disease.name} 
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-3">{disease.name}</h3>
      <div className="space-y-2">
        <div>
          <h4 className="font-medium text-green-700">Gejala:</h4>
          <ul className="list-disc pl-5">
            {disease.symptoms.map((symptom, index) => (
              <li key={index} className="text-gray-600">{symptom}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-green-700">Penyebab:</h4>
          <p className="text-gray-600">{disease.causes}</p>
        </div>
        <div>
          <h4 className="font-medium text-green-700">Penanganan:</h4>
          <p className="text-gray-600">{disease.treatment}</p>
        </div>
      </div>
    </Card>
  );
}