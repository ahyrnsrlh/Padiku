import React, { useState } from 'react';
import Button from '../ui/Button';
import { Search, AlertCircle } from 'lucide-react';
import { symptoms } from '../../data/symptoms';
import { diagnose } from '../../utils/diagnosisEngine';

interface DiagnosisFormProps {
  onDiagnosisComplete: (result: any) => void;
}

export default function DiagnosisForm({ onDiagnosisComplete }: DiagnosisFormProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleSymptomChange = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = diagnose(selectedSymptoms);
    if (result) {
      onDiagnosisComplete(result);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="text-green-600 w-5 h-5" />
            <h3 className="text-xl font-semibold">Pilih gejala yang terlihat:</h3>
          </div>
          <p className="text-gray-600">Centang semua gejala yang tampak pada tanaman padi Anda</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {symptoms.map(symptom => (
            <label 
              key={symptom.id} 
              className={`
                flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                ${selectedSymptoms.includes(symptom.id) 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-green-200'}
              `}
            >
              <input
                type="checkbox"
                checked={selectedSymptoms.includes(symptom.id)}
                onChange={() => handleSymptomChange(symptom.id)}
                className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="ml-3 text-gray-700">{symptom.description}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            type="submit"
            icon={Search}
            disabled={selectedSymptoms.length === 0}
            className="w-full md:w-auto"
          >
            Mulai Diagnosa
          </Button>
        </div>
      </div>
    </form>
  );
}