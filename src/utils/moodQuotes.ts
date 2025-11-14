import { MoodType } from '@/types/mood';

export const moodQuotes: Record<MoodType, string[]> = {
  happy: [
    "Your smile is contagious—keep spreading the joy! 😊",
    "Happiness looks beautiful on you!",
    "You're radiating positive energy today!",
    "This moment of joy—cherish it!",
  ],
  sad: [
    "It's okay to feel this way. You're stronger than you know. 💙",
    "Tough times don't last, but tough people do.",
    "Be gentle with yourself. You're doing the best you can.",
    "Every storm runs out of rain. Brighter days are coming.",
  ],
  calm: [
    "Peace is the result of retraining your mind. 🧘",
    "In the midst of movement, find stillness.",
    "Calmness is the cradle of power.",
    "You're in perfect harmony right now.",
  ],
  energetic: [
    "Channel that energy into something amazing! ⚡",
    "Your enthusiasm is inspiring!",
    "With this energy, anything is possible!",
    "Keep that fire burning bright!",
  ],
  anxious: [
    "Take a deep breath. You've got this. 🌸",
    "Anxiety is temporary. Your strength is permanent.",
    "One step at a time. You're doing great.",
    "It's okay to pause and reset.",
  ],
  neutral: [
    "Sometimes neutrality is exactly what we need. ✨",
    "You're in a balanced state—embrace it.",
    "Peace begins with a calm mind.",
    "This moment is enough.",
  ],
};

export const musicSuggestions: Record<MoodType, string[]> = {
  happy: [
    "Happy - Pharrell Williams",
    "Don't Stop Me Now - Queen",
    "Good Vibrations - The Beach Boys",
    "Walking on Sunshine - Katrina & The Waves",
  ],
  sad: [
    "Fix You - Coldplay",
    "Someone Like You - Adele",
    "The Scientist - Coldplay",
    "Skinny Love - Bon Iver",
  ],
  calm: [
    "Weightless - Marconi Union",
    "Clair de Lune - Debussy",
    "River Flows in You - Yiruma",
    "Spiegel im Spiegel - Arvo Pärt",
  ],
  energetic: [
    "Eye of the Tiger - Survivor",
    "Can't Hold Us - Macklemore",
    "Stronger - Kanye West",
    "Titanium - David Guetta ft. Sia",
  ],
  anxious: [
    "Breathe Me - Sia",
    "Holocene - Bon Iver",
    "Aqueous Transmission - Incubus",
    "Porcelain - Moby",
  ],
  neutral: [
    "Ambient 1 - Brian Eno",
    "Gymnopédie No. 1 - Erik Satie",
    "Nuvole Bianche - Ludovico Einaudi",
    "Intro - The xx",
  ],
};

export function getRandomQuote(mood: MoodType): string {
  const quotes = moodQuotes[mood];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export function getRandomMusic(mood: MoodType): string {
  const music = musicSuggestions[mood];
  return music[Math.floor(Math.random() * music.length)];
}
