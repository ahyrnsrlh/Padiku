import React, { useState } from 'react';
import { diagnose } from '../../utils/diagnosisEngine';
import { symptoms } from '../../data/symptoms';
import { DiagnosisResult } from '../../types/diagnosis';

export function DiagnosisCard() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleDiagnosis = () => {
    const diagnosisResult = diagnose(selectedSymptoms);
    setResult(diagnosisResult);
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Diagnosa Penyakit
      </h2>

      {!result ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {symptoms.map(symptom => (
              <label
                key={symptom.id}
                className={`
                  flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all
                  ${
                    selectedSymptoms.includes(symptom.id)
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                      : 'border-gray-200 dark:border-gray-700'
                  }
                `}
              >
                <input
                  type="checkbox"
                  checked={selectedSymptoms.includes(symptom.id)}
                  onChange={() => handleSymptomToggle(symptom.id)}
                  className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="ml-3 text-gray-700 dark:text-gray-300">
                  {symptom.description}
                </span>
              </label>
            ))}
          </div>

          <button
            onClick={handleDiagnosis}
            disabled={selectedSymptoms.length === 0}
            className="w-full md:w-auto px-8 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Diagnosa Sekarang
          </button>
        </>
      ) : (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {result.disease.name}
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Tingkat Kepercayaan: {result.disease.confidence}%
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Penyebab:
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {result.disease.causes}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Penanganan:
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {result.disease.treatment}
              </p>
            </div>
          </div>

          <button
            onClick={() => setResult(null)}
            className="px-6 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
          >
            Diagnosa Ulang
          </button>
        </div>
      )}
    </div>
  );
}