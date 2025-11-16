
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">About Your Coach, Lori-Ann</h2>
            <p className="mt-6 text-lg text-slate-600">
              I understand the unique challenges women face because I've been there. My journey through life's ups and downs ignited a passion to help other women find their inner strength and navigate their own paths with confidence and clarity.
            </p>
            <p className="mt-4 text-slate-600">
              My mission is to create a safe, supportive, and caring space where you feel heard and empowered. Together, we'll uncover the limiting beliefs holding you back and replace them with powerful new perspectives that will serve you for a lifetime.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-700">My Credentials</h3>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Certified Life Coach
                </li>
                <li className="flex items-center">
                   <svg className="h-5 w-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  NLP (Neuro-Linguistic Programming) Practitioner
                </li>
                <li className="flex items-center">
                   <svg className="h-5 w-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Certified Hypnotherapist
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://picsum.photos/id/367/500/500" 
              alt="Lori-Ann MacLeod, Confidence Coach"
              className="rounded-full shadow-2xl w-64 h-64 md:w-96 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
