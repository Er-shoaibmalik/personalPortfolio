import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Clean Code</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Writing maintainable and scalable code following best practices
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Modern Design</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Creating beautiful and responsive user interfaces
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Web Solutions</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Building full-stack applications that solve real problems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}