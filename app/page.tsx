'use client';

import React, { useEffect, useState } from 'react';
import { PLATFORMS, getPlatformDetails } from './data/platforms';
import { VoteState, UpvotedState, ExpandedState, PlatformDetails } from './types/platform';
import { getClientIP, getUserUpvotes, getPlatformVotes, addUpvote, checkUpvoteExists } from './lib/upvote';
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {
  const [votes, setVotes] = useState<VoteState>({});
  const [upvoted, setUpvoted] = useState<UpvotedState>({});
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [clientIP, setClientIP] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isUpvoting, setIsUpvoting] = useState<string | null>(null);
  const [userUpvoteCount, setUserUpvoteCount] = useState(0);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      const ip = await getClientIP();
      setClientIP(ip);

      const userUpvotes = await getUserUpvotes(ip);
      const upvotedState: UpvotedState = {};
      userUpvotes.forEach(platform => {
        upvotedState[platform] = true;
      });
      setUpvoted(upvotedState);
      setUserUpvoteCount(userUpvotes.length);

      const platformVotes = await getPlatformVotes();
      const voteState: VoteState = {};
      platformVotes.forEach(vote => {
        voteState[vote.platform_name] = vote.vote_count;
      });
      setVotes(voteState);
    } catch (error) {
      console.error('Error initializing app:', error);
      toast.error('Failed to load voting data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpvote = async (name: string) => {
    if (!clientIP || upvoted[name] || isUpvoting === name) return;

    const alreadyUpvoted = await checkUpvoteExists(name, clientIP);
    if (alreadyUpvoted) {
      toast.error('You have already upvoted this platform!');
      return;
    }

    if (userUpvoteCount >= 3) {
      toast.success('Thanks for participating! You have reached the maximum of 3 upvotes.');
      return;
    }

    setIsUpvoting(name);

    try {
      const success = await addUpvote(name, clientIP);
      
      if (success) {
        const newVotes = { ...votes, [name]: (votes[name] || 0) + 1 };
        const newUpvoted = { ...upvoted, [name]: true };
        setVotes(newVotes);
        setUpvoted(newUpvoted);
        setUserUpvoteCount(prev => prev + 1);

        toast.success(`Upvoted ${name}!`, {
          position: 'top-right',
          duration: 2000,
        });

        if (userUpvoteCount + 1 >= 3) {
          setTimeout(() => {
            toast.success('Thanks for participating! You have reached the maximum of 3 upvotes.', {
              position: 'top-right',
              duration: 4000,
            });
          }, 2000);
        }
      } else {
        toast.error('Failed to upvote. Please try again.');
      }
    } catch (error) {
      console.error('Error upvoting:', error);
      toast.error('Failed to upvote. Please try again.');
    } finally {
      setTimeout(() => {
        setIsUpvoting(null);
      }, 2000);
    }
  };

  const toggleExpanded = (name: string) => {
    setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center py-10 px-2">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-2">
      <Toaster />
      
      <div className="mb-6 flex justify-center items-center gap-1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="80" 
          height="80" 
          viewBox="0 0 48 48"
          className="text-gray-800"
        >
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.319 4.5l-2.602 2.74l-.866 18.655c-1.663.534-1.14 3.204-1.14 3.204L6.03 40.536l.82 2.964h34.3l.82-2.964l-3.68-11.438s.522-2.67-1.14-3.203L36.282 7.24L33.68 4.5H14.32Zm-3.467 21.395H24M9.712 29.098H24M6.031 40.537H24"/>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M24 8.772s-4.951.042-6.384.115c-1.864.094-2.976.59-3.47 2.07c-.433 1.296-.313 5.815-.167 6.935c.146 1.12.655 2.986 2.762 3.224s7.259.16 7.259.16s5.152.078 7.26-.16s2.616-2.105 2.761-3.225s.266-5.638-.167-6.935c-.494-1.48-1.606-1.975-3.47-2.07C28.951 8.814 24 8.772 24 8.772Zm13.148 17.123H24m14.288 3.203H24m17.968 11.439H24"/>
          <path fill="none" stroke="currentColor" strokeLinejoin="round" d="M11.554 31.49l-2.132 6.724h20.99l-1.437-6.723H11.554Z"/>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M32.415 31.49h3.48c1.635 4.595 1.615 4.774 2.259 6.723h-4.055l-1.684-6.723"/>
          <path fill="none" stroke="currentColor" d="M10.168 34.807h19.627m7.258 0h-3.74m-19.527 3.237l1.554-6.369m2.791 6.505l.815-6.504m3.251 6.332l.107-6.404m3.992 6.444l-.8-6.285"/>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.317 17.562a1.22 1.22 0 0 0 .206-.826v-.258"/>
          <circle cx="23.385" cy="16.989" r=".75" fill="currentColor"/>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M25.416 14.98h2.066m-6.557-2.478h-.826v4.956h.826m8.935-4.956h.826v4.956h-.826"/>
        </svg>
        <a 
          href="/blog" 
          className="text-gray-600 hover:text-gray-800 text-lg font-medium transition-colors duration-200 underline"
        >
          (Check The Result blog)
        </a>
      </div>
      
      <h1 className="text-3xl font-bold mb-2 text-center">Market here, there, everywhere</h1>
      <p className="text-gray-600 text-lg mb-4 text-center max-w-xl mx-auto">
        Curated from verified X posts and blogs, these are the top launch platforms for 2025. Upvote your favorite 3!
      </p>

      <div className="w-full max-w-3xl grid grid-cols-1 gap-4">
        {PLATFORMS
          .map((platform) => {
            const voteCount = votes[platform.name] || 0;
            return { ...platform, voteCount };
          })
          .sort((a, b) => b.voteCount - a.voteCount)
          .map((platform, index) => {
            const details: PlatformDetails = getPlatformDetails(platform.name);
            const isExpanded = expanded[platform.name];
            const isDisabled = upvoted[platform.name] || userUpvoteCount >= 3 || isUpvoting === platform.name;
            const rank = index + 1;

            return (
              <div key={platform.name} className="transition-all duration-300 ease-in-out">
                <div className={`flex items-center bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 group ${
                  rank === 1 ? 'border-yellow-300 shadow-yellow-100' :
                  rank === 2 ? 'border-gray-300 shadow-gray-100' :
                  rank === 3 ? 'border-orange-300 shadow-orange-100' :
                  'border-gray-200'
                } ${isExpanded ? 'shadow-lg scale-[1.02]' : ''}`}>
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200">
                      <span className="w-10 h-10 flex items-center justify-center text-2xl">
                        {platform.icon}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-lg mb-1 truncate">{platform.name}</div>
                    <div className="text-gray-600 text-sm truncate">{platform.description}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className={`px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
                        upvoted[platform.name]
                          ? 'bg-green-100 text-green-800 cursor-not-allowed border border-green-200 shadow-sm'
                          : isDisabled
                          ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                          : 'bg-white text-green-600 hover:bg-green-50 hover:text-green-700 border border-green-300 hover:border-green-400 shadow-sm hover:shadow-md'
                      }`}
                      onClick={() => handleUpvote(platform.name)}
                      disabled={isDisabled}
                      aria-label={`Upvote ${platform.name}`}
                    >
                      {isUpvoting === platform.name ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-green-600"></div>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 19V5" />
                          <path d="M5 12l7-7 7 7" />
                        </svg>
                      )}
                      <span>Upvote</span>
                      <span className="ml-1 font-semibold">{platform.voteCount}</span>
                    </button>
                  </div>
                  <button
                    className={`ml-2 p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                      isExpanded 
                        ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => toggleExpanded(platform.name)}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${platform.name} details`}
                    title={isExpanded ? 'Click to collapse details' : 'Click to expand details'}
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      className={`transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-90' : ''}`}
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                {isExpanded && (
                  <div className="mt-2 ml-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 shadow-sm animate-in slide-in-from-top-2 duration-300">
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <h4 className="text-sm font-semibold text-gray-800">How to Share</h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{details.howToShare}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <h4 className="text-sm font-semibold text-gray-800">Community/Subreddit</h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{details.community}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <h4 className="text-sm font-semibold text-gray-800">Link to Check</h4>
                        </div>
                        <a 
                          href={details.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group"
                        >
                          <span className="underline decoration-blue-300 hover:decoration-blue-600 transition-all duration-200 break-all">
                            {details.link}
                          </span>
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <p className="mt-10 text-gray-500 text-sm text-center max-w-xl">
  Upvote your top 3 launch platforms once each! Curated for impactful 2025 marketing by <a href="https://mdanassaif.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">@mdanassaif</a>.
</p>
    </div>
  );
}