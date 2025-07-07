/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-5xl font-bold mb-6 text-black">
            From Zero to 1,000 Visitors in 24 Hours
          </h1>
          <p className="text-xl text-gray-700 mb-2 max-w-3xl">
            How I launched BruhGrow Tools across multiple platforms and got massive traffic. Here's the complete breakdown of what worked and what didn't.
          </p>
          
           
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I recently launched <a href="https://bruhgrow.com/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">BruhGrow Tools</a>—a collection of 20+ productivity and marketing web tools. 
            The challenge wasn&apos;t building the product; it was getting people to actually see it. Here&apos;s exactly 
            what I did to get 1,000+ visitors in the first 24 hours.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-black">
            <h3 className="font-semibold text-black mb-2">The Strategy</h3>
            <p className="text-gray-700">
              Multi-platform launch with platform-specific messaging. Each platform has its own culture—ignoring 
              that is a recipe for failure.
            </p>
          </div>
        </div>

        {/* Platform Strategy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8">The Platforms I Used</h2>
          
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6  ">
              <div className="mb-6">
                <Image 
                  src="/reddit.png" 
                  alt="Reddit" 
                  width={672}
                  height={400}
                  className="w-full max-w-2xl mx-auto object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Reddit</h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Posted in r/SideProject, r/svg. Reddit gave me the most immediate 
                  traffic and feedback. The key was leading with value, not promotion.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-800 font-medium"><span className="font-bold">Result:</span> 40% of total traffic came from Reddit</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6  ">
              <div className="mb-6">
                <Image 
                  src="/threads.png" 
                  alt="Threads" 
                  width={672}
                  height={400}
                  className="w-full max-w-2xl mx-auto object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Threads</h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Perfect for visual content. I shared screenshots of the tools in action, which worked 
                  better than just text descriptions. The engagement was solid.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-800 font-medium"><span className="font-bold">Result:</span> High engagement rate, good for brand awareness</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6  ">
              <div className="mb-6">
                <Image 
                  src="/peerlist.png" 
                  alt="Peerlist" 
                  width={672}
                  height={400}
                  className="w-full max-w-2xl mx-auto object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Peerlist</h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  The quality of visitors from Peerlist was exceptional. These were developers and tech 
                  professionals who immediately understood the value proposition.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-800 font-medium"><span className="font-bold">Result:</span> Highest conversion rate and quality feedback</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6  ">
              <div className="mb-6">
                <Image 
                  src="/hackernews.png" 
                  alt="Hacker News" 
                  width={672}
                  height={400}
                  className="w-full max-w-2xl mx-auto object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Hacker News</h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  High risk, high reward. I managed to get great amount of traffic. The users here are brutally honest but fair in their feedback.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-800 font-medium"><span className="font-bold">Result:</span> Biggest traffic spike, valuable technical feedback</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6  ">
              <div className="mb-6">
                <Image 
                  src="/1kinoneday.png" 
                  alt="Analytics showing 1k visitors" 
                  width={672}
                  height={400}
                  className="w-full max-w-2xl mx-auto object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The Results</h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  The analytics don&apos;t lie—1,000+ new visitors in 24 hours. This was the result of coordinated 
                  posting across all platforms within a 2-hour window.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-800 font-medium"><span className="font-bold">Result:</span> 1,000+ visitors, 85% new users</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8">What I Learned</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold text-black mb-2">1. Platform Culture Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Reddit users hate self-promotion. Hacker News users want technical depth. Threads users 
                engage with visuals. Peerlist users appreciate professional context. One size fits none.
              </p>
            </div>

      

            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold text-black mb-2">2. Lead with Problems, Not Products</h3>
              <p className="text-gray-700 leading-relaxed">
                "Here's how I solve X problem" performs better than "Check out my tool." People care about 
                solutions, not features. Frame your product as the answer to a pain point.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold text-black mb-2">3. Engage, Don't Just Post</h3>
              <p className="text-gray-700 leading-relaxed">
                The most successful posts weren't announcements—they were conversations. Responding to 
                comments and asking questions created community around the launch.
              </p>
            </div>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="bg-black text-white p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Tell Us Which Platform is Best for Marketing</h2>
          <p className="text-gray-300 mb-4 text-lg">
            I used my favorite platform idk what if your projects, and your creative ideas make on others so give upvote to tell which platform is bets for marketing
          </p>
          <div className="mt-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><mask id="ipSUpC0"><g fill="none" strokeWidth="4"><path stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" clipRule="evenodd"/><path fill="#fff" stroke="#fff" strokeLinejoin="round" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m33 27l-9-9l-9 9"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUpC0)"/></svg>
              Upvote
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Written by <a href="https://mdanassaif.xyz/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline font-medium">@mdanassaif</a>
          </p>
        </div>
      </div>
    </div>
  );
}