import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-indigo-600 py-20">
        <h1 className="text-5xl font-semibold text-white mb-4">Code Gang Leaderboard</h1>
        <p className="text-xl text-white mb-6">
          Compete with your friends and track your coding progress!
        </p>
        <a
          href="#leaderboard"
          className="px-6 py-3 bg-indigo-800 text-white rounded-lg text-lg hover:bg-indigo-900 transition duration-200"
        >
          View Leaderboard
        </a>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Code Gang</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-8">
          Code Gang is a platform where you can solve DSA challenges with your friends, track daily progress, earn points, and
          climb the leaderboard. It's a fun and competitive way to improve your coding skills and stay motivated!
        </p>
        <a
          href="#join"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition duration-200"
        >
          Join Now
        </a>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Leaderboard</h2>
        <p className="text-lg text-gray-700 mb-6">
          See who's at the top of the leaderboard and get inspired by their progress.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full text-left table-auto">
            <thead>
              <tr>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Rank</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Name</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Points</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Leaderboard Data */}
              <tr className="border-b">
                <td className="py-3 px-4 text-sm text-gray-800">1</td>
                <td className="py-3 px-4 text-sm text-gray-800">John Doe</td>
                <td className="py-3 px-4 text-sm text-gray-800">150</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-sm text-gray-800">2</td>
                <td className="py-3 px-4 text-sm text-gray-800">Jane Smith</td>
                <td className="py-3 px-4 text-sm text-gray-800">120</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-sm text-gray-800">3</td>
                <td className="py-3 px-4 text-sm text-gray-800">Alice Brown</td>
                <td className="py-3 px-4 text-sm text-gray-800">110</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Code Gang</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-6">
          Ready to join the challenge and see how you stack up? Start solving DSA questions with your friends, earn points, and
          climb the leaderboard today!
        </p>
        <a
          href="/user/new"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition duration-200"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6">
        <p className="text-white text-sm">
          © 2024 Code Gang. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
