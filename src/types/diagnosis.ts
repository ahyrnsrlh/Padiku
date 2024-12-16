export interface Symptom {
  id: string;
  description: string;
}

export interface Disease {
  id: string;
  name: string;
  symptoms: string[];
  causes: string;
  treatment: string;
  image?: string;
  confidence: number;
}

export interface DiagnosisResult {
  disease: Disease;
  confidence: number;
}