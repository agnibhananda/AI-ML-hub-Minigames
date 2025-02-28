import React from 'react';
import { GameCard } from '../components/GameCard';
import { games } from '../data/games';
import { ArrowRight, Brain, Sparkles, Zap, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  // Filter games for each section
  const system1Games = games.filter(game => 
    game.id !== '2' && game.id !== '6'
  );
  
  const system2Games = games.filter(game => 
    game.id === '2'
  );
  
  const bonusGames = games.filter(game => 
    game.id === '6'
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="h-full w-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 opacity-20">
              {[...Array(9)].map((_, i) => (
                <Brain
                  key={i}
                  className="w-24 h-24 text-white transform rotate-45 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="flex justify-center mb-6">
            <img 
              src="aimlLogo.png" 
              alt="AI/ML Logo" 
              className="h-24 w-24"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Brain Games Arcade
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            Challenge your mind with our collection of engaging puzzle and memory games
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="#games"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Play Games
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Game Criteria Section */}
      <section className="container mx-auto px-4 py-10 bg-indigo-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 flex items-center justify-center">
            <Award className="w-8 h-8 mr-3 text-yellow-500" />
            Game Completion Criteria
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center font-medium">
              Complete these minimum criteria for each game to count it in the competition:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-bold text-sm mr-3">1</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Pop and Drop:</strong> Complete 5 levels</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-bold text-sm mr-3">2</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Memory Madness:</strong> Complete 3 levels</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-bold text-sm mr-3">3</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Puzzle Mind:</strong> Complete 10 levels</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-bold text-sm mr-3">4</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Memory Maze:</strong> Complete 3 levels</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium text-center">
                Complete as many games according to criteria in the shortest time possible to win the prize!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System-1 Games Section */}
      <section id="games" className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 mr-2 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              System-1
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fast, automatic, and intuitive thinking games that test your reflexes and pattern recognition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {system1Games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </section>

      {/* System-2 Games Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 mr-2 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              System-2
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Slow, deliberate, and analytical thinking games that challenge your reasoning and problem-solving abilities
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            {system2Games.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-red-500 to-purple-600">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 mr-2 text-white" />
            <h2 className="text-3xl font-bold text-white">
              Bonus Section: REDUCE YOUR TIME
            </h2>
          </div>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Challenge yourself with our most demanding game that will put your cognitive abilities to the ultimate test
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            {bonusGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
