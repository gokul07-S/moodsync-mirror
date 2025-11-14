export type MoodType = 'happy' | 'sad' | 'calm' | 'energetic' | 'anxious' | 'neutral';

export interface MoodData {
  type: MoodType;
  confidence: number;
  timestamp: Date;
  quote?: string;
  musicSuggestion?: string;
}

export interface MoodLog {
  id: string;
  mood: MoodType;
  timestamp: Date;
  note?: string;
}
