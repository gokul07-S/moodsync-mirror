import { MoodData } from '@/types/mood';
import { Music, Quote, Sparkles } from 'lucide-react';

interface MoodDisplayProps {
  moodData: MoodData | null;
}

const MoodDisplay = ({ moodData }: MoodDisplayProps) => {
  if (!moodData) {
    return (
      <div className="text-center space-y-4 animate-pulse">
        <Sparkles className="w-12 h-12 mx-auto text-primary animate-pulse-slow" />
        <p className="text-lg text-muted-foreground">
          Look at the camera to detect your mood...
        </p>
      </div>
    );
  }

  const moodEmojis = {
    happy: '😊',
    sad: '😢',
    calm: '😌',
    energetic: '⚡',
    anxious: '😰',
    neutral: '😐',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Mood indicator */}
      <div className="text-center space-y-2">
        <div className="text-6xl mb-2">{moodEmojis[moodData.type]}</div>
        <h2 className="text-3xl font-bold capitalize">{moodData.type}</h2>
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${moodData.confidence * 100}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground">
            {Math.round(moodData.confidence * 100)}%
          </span>
        </div>
      </div>

      {/* Quote */}
      {moodData.quote && (
        <div className="glass rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <Quote className="w-5 h-5" />
            <span className="font-semibold">Your Quote</span>
          </div>
          <p className="text-lg leading-relaxed">{moodData.quote}</p>
        </div>
      )}

      {/* Music suggestion */}
      {moodData.musicSuggestion && (
        <div className="glass rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <Music className="w-5 h-5" />
            <span className="font-semibold">Recommended Track</span>
          </div>
          <p className="text-lg">{moodData.musicSuggestion}</p>
        </div>
      )}
    </div>
  );
};

export default MoodDisplay;
