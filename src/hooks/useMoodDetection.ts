import { useState, useCallback } from 'react';
import { MoodType, MoodData } from '@/types/mood';
import { getRandomQuote, getRandomMusic } from '@/utils/moodQuotes';

// Simulated mood detection - in production, this would use actual AI
const detectMood = (): MoodData => {
  const moods: MoodType[] = ['happy', 'sad', 'calm', 'energetic', 'anxious', 'neutral'];
  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  const confidence = 0.7 + Math.random() * 0.3; // 70-100%

  return {
    type: randomMood,
    confidence,
    timestamp: new Date(),
    quote: getRandomQuote(randomMood),
    musicSuggestion: getRandomMusic(randomMood),
  };
};

export const useMoodDetection = () => {
  const [moodData, setMoodData] = useState<MoodData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeMood = useCallback((imageData?: ImageData) => {
    setIsAnalyzing(true);
    
    // Simulate processing time
    setTimeout(() => {
      const newMoodData = detectMood();
      setMoodData(newMoodData);
      setIsAnalyzing(false);
    }, 1500);
  }, []);

  return {
    moodData,
    isAnalyzing,
    analyzeMood,
  };
};
