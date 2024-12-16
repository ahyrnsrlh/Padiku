import React, { useState } from 'react';
import Section from '../ui/Section';
import DiagnosisForm from './DiagnosisForm';
import DiagnosisResult from './DiagnosisResult';
import { DiagnosisResult as DiagnosisResultType } from '../../types/diagnosis';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';

export default function Diagnosis() {
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResultType | null>(null);

  const handleDiagnosisComplete = (result: DiagnosisResultType) => {
    setDiagnosisResult(result);
  };

  const handleReset = () => {
    setDiagnosisResult(null);
  };

  return (
    <Section id="diagnosis" background="light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Diagnosa Penyakit</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Identifikasi penyakit pada tanaman padi Anda dengan mudah dan akurat menggunakan sistem pakar kami
          </p>
        </div>

        {diagnosisResult ? (
          <>
            <DiagnosisResult disease={diagnosisResult.disease} />
            <div className="text-center mt-8">
              <Button
                onClick={handleReset}
                variant="secondary"
                icon={ArrowLeft}
              >
                Diagnosa Ulang
              </Button>
            </div>
          </>
        ) : (
          <DiagnosisForm onDiagnosisComplete={handleDiagnosisComplete} />
        )}
      </div>
    </Section>
  );
}