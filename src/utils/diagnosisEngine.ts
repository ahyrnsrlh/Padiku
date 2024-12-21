import { Disease, DiagnosisResult } from '../types/diagnosis';
import { diseases } from '../data/diseases';

export function diagnose(selectedSymptoms: string[]): DiagnosisResult | null {
  if (!selectedSymptoms.length) return null;

  // Hitung tingkat kepercayaan untuk setiap penyakit
  const results = diseases.map(disease => {
    const matchingSymptoms = disease.symptoms.filter(symptom => 
      selectedSymptoms.includes(symptom)
    );

    // Hitung tingkat kepercayaan berdasarkan gejala yang cocok
    const confidence = Math.round(
      (matchingSymptoms.length / disease.symptoms.length) * 100
    );

    return {
      ...disease,
      confidence
    };
  });

  // Urutkan berdasarkan tingkat kepercayaan dan ambil yang paling cocok
  const sortedResults = results.sort((a, b) => b.confidence - a.confidence);
  const bestMatch = sortedResults[0];

  // Hanya kembalikan hasil dengan tingkat kepercayaan > 0
  if (bestMatch.confidence > 0) {
    return {
      disease: bestMatch,
      confidence: bestMatch.confidence
    };
  }

  return null;
}