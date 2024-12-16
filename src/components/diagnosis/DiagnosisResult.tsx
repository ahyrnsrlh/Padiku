import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

interface DiagnosisResultProps {
  disease: {
    name: string;
    symptoms: string[];
    causes: string;
    treatment: string;
    image?: string;
    confidence: number;
  };
}

export default function DiagnosisResult({ disease }: DiagnosisResultProps) {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600';
    if (confidence >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getConfidenceIcon = (confidence: number) => {
    if (confidence >= 50) return CheckCircle2;
    return AlertTriangle;
  };

  const ConfidenceIcon = getConfidenceIcon(disease.confidence);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {disease.image && (
          <div className="relative h-64">
            <img 
              src={disease.image} 
              alt={disease.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{disease.name}</h3>
              <div className="flex items-center gap-2">
                <ConfidenceIcon className={`w-5 h-5 ${getConfidenceColor(disease.confidence)}`} />
                <span className={`font-medium ${getConfidenceColor(disease.confidence)}`}>
                  Tingkat Kepercayaan: {disease.confidence}%
                </span>
              </div>
            </div>
          </div>
        )}
        
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-green-700 mb-3">Gejala yang Teridentifikasi</h4>
            <ul className="list-disc pl-5 space-y-1">
              {disease.symptoms.map((symptom, index) => (
                <li key={index} className="text-gray-600">{symptom}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-700 mb-3">Penyebab</h4>
            <p className="text-gray-600">{disease.causes}</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="text-lg font-semibold text-green-700 mb-3">Rekomendasi Penanganan</h4>
            <p className="text-gray-600">{disease.treatment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}