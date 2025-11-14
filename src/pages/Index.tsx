import { useState } from 'react';
import CameraView from '@/components/CameraView';
import MoodDisplay from '@/components/MoodDisplay';
import { useMoodDetection } from '@/hooks/useMoodDetection';
import { Button } from '@/components/ui/button';
import { Camera, History, Sparkles } from 'lucide-react';

const Index = () => {
  const [isMirrorActive, setIsMirrorActive] = useState(false);
  const { moodData, isAnalyzing, analyzeMood } = useMoodDetection();

  const getMoodGradientClass = () => {
    if (!moodData) return 'mood-gradient-neutral';
    return `mood-gradient-${moodData.type}`;
  };

  const handleStartMirror = () => {
    setIsMirrorActive(true);
    // Start analyzing mood after a short delay
    setTimeout(() => {
      analyzeMood();
    }, 2000);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${getMoodGradientClass()}`}
    >
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-card/50 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-card-foreground">AI Mood Mirror</h1>
                <p className="text-sm text-card-foreground/70">
                  Reflect your emotions, discover your mood
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-2xl glass"
            >
              <History className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
            {/* Camera section */}
            <div className="space-y-4">
              <CameraView
                isActive={isMirrorActive}
                onFrame={(imageData) => {
                  if (!isAnalyzing) {
                    analyzeMood(imageData);
                  }
                }}
              />
              {!isMirrorActive && (
                <Button
                  onClick={handleStartMirror}
                  size="lg"
                  className="w-full rounded-2xl h-14 text-lg font-semibold"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Start Mirror
                </Button>
              )}
            </div>

            {/* Mood display section */}
            <div className="lg:pl-8">
              {isMirrorActive ? (
                <MoodDisplay moodData={moodData} />
              ) : (
                <div className="text-center space-y-6 glass rounded-3xl p-12">
                  <Sparkles className="w-20 h-20 mx-auto text-primary animate-pulse-slow" />
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Welcome</h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto">
                      Your personal AI companion that understands your emotions and
                      provides personalized music, quotes, and positivity.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <div className="glass rounded-xl px-4 py-2">
                      <span className="text-sm font-medium">😊 Mood Detection</span>
                    </div>
                    <div className="glass rounded-xl px-4 py-2">
                      <span className="text-sm font-medium">🎵 Music Suggestions</span>
                    </div>
                    <div className="glass rounded-xl px-4 py-2">
                      <span className="text-sm font-medium">💭 Daily Quotes</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm text-card-foreground/50">
            Take a moment to check in with yourself ✨
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
