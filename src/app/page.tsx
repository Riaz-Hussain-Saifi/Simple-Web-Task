import React from 'react';

export default function Home() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
          <h1 className="text-5xl font-bold text-blue-600 mb-8">Welcome to My Portfolio</h1>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              I'm <strong>Riaz Hussain Saifi</strong>, a web developer specializing in modern web technologies like HTML, CSS, TypeScript, and Next.js. Explore my projects, learn more about my journey, and feel free to reach out!
            </p>
            <a href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get in Touch
            </a>
          </div>
        </div>
      );
    };
    
