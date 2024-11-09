import React from "react";

export default function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">About Me</h1>
        <div className="max-w-4xl bg-white shadow-md rounded p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hello, I'm <strong>Riaz Hussain Saifi</strong>, a passionate web developer with expertise in HTML, CSS, TypeScript, Next.js, and Tailwind CSS. I have completed my BSc in Computer Science at Shah Abdul Latif University, Khairpur, and I'm currently pursuing a Certified Cloud Applied Gen AI Engineering course at GIAIC.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Alongside my studies, I work as a Logistic Dispatch Coordinator part-time at Barket Fertilizer in Port Qasim, Karachi. I manage this role while continuing to develop my web development skills and work on exciting tech projects.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Additionally, I run a YouTube channel called "Learn With Riaz" where I share web development tutorials and educational content. I'm also active on GitHub and npm, contributing to open-source projects.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Feel free to explore my projects and get in touch if you're looking for a dedicated developer to bring your ideas to life!
          </p>
        </div>
      </div>
    );
  }
  