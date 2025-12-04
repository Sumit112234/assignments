'use client';

import { useState } from 'react';
import { Search, MapPin, Users, BookOpen, Loader2 } from 'lucide-react';

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  followers: number;
  public_repos: number;
  location: string | null;
  html_url: string;
}

export default function Home() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchGitHubUser = async () => {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username.trim()}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          setError('User not found. Please check the username and try again.');
        } else {
          setError('Something went wrong. Please try again later.');
        }
        setLoading(false);
        return;
      }

      const data: GitHubUser = await response.json();
      console.log(data);
      setUserData(data);
    } catch (err) {
      setError('Failed to fetch user data. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      fetchGitHubUser();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">GitHub Profile Finder</h1>
          <p className="text-gray-400">Search for any GitHub user and view their profile</p>
        </div>

        <div className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter GitHub username (e.g., octocat)"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <button
              onClick={fetchGitHubUser}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Search className="w-5 h-5" />
              )}
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-8">
            {error}
          </div>
        )}

        {userData && (
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="w-32 h-32 rounded-full border-4 border-gray-700"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {userData.name || userData.login}
                  </h2>
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 mb-3 inline-block"
                  >
                    @{userData.login}
                  </a>
                  
                  {userData.bio && (
                    <p className="text-gray-300 mb-4">{userData.bio}</p>
                  )}

                  {userData.location && (
                    <div className="flex items-center gap-2 text-gray-400 mb-4 justify-center md:justify-start">
                      <MapPin className="w-4 h-4" />
                      <span>{userData.location}</span>
                    </div>
                  )}

                  <div className="flex gap-6 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="font-semibold">{userData.followers}</span>
                      <span className="text-gray-400">Followers</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300">
                      <BookOpen className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{userData.public_repos}</span>
                      <span className="text-gray-400">Repos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 px-8 py-4">
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                View Full Profile on GitHub →
              </a>
            </div>
          </div>
        )}

        {!userData && !error && !loading && (
          <div className="text-center text-gray-400 py-12">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Enter a GitHub username above to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}