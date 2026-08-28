import React from 'react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
        You don't need more extracurriculars.
        <span className="text-purple-400 block mt-2">You need the right ones.</span>
      </h1>
      <p className="max-w-md text-zinc-400 mb-8 mt-4">
        Tell Pathfinder your age, interests, and goals. Discover the perfect competitions and programs for you.
      </p>
      <button className="px-8 py-4 bg-purple-600 text-white font-medium rounded-2xl hover:bg-purple-500 transition-all">
        Build My Roadmap →
      </button>
    </div>
  );
}
