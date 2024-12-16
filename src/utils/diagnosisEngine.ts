import { Disease, DiagnosisResult } from '../types/diagnosis';
import { diseases } from '../data/diseases';

export function diagnose(selectedSymptoms: string[]): DiagnosisResult | null {
  if (!selectedSymptoms.length) return null;

  // Calculate confidence for each disease
  const results = diseases.map(disease => {
    const matchingSymptoms = disease.symptoms.filter(symptom => 
      selectedSymptoms.includes(symptom)
    );

    // Calculate confidence based on matching symptoms
    const confidence = Math.round(
      (matchingSymptoms.length / disease.symptoms.length) * 100
    );

    return {
      ...disease,
      confidence
    };
  });

  // Sort by confidence and get the highest match
  const sortedResults = results.sort((a, b) => b.confidence - a.confidence);
  const bestMatch = sortedResults[0];

  // Only return results with confidence > 0
  if (bestMatch.confidence > 0) {
    return {
      disease: bestMatch,
      confidence: bestMatch.confidence
    };
  }

  return null;
}