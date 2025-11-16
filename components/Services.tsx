
import React from 'react';

const services = [
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    ),
    title: 'Confidence in Your Home Life',
    description: 'Navigate personal challenges like divorce, loss, or financial stress with newfound strength. We help you rebuild your foundation, rediscover your identity, and create a peaceful, fulfilling home environment.',
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: 'Thriving in Your Corporate Life',
    description: 'Are you being overlooked or feeling unappreciated? We equip you with the tools to assert your value, communicate with impact, and command the respect you deserve in the workplace.',
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
    title: 'Leading as an Entrepreneur',
    description: "Unlock the competitive edge you need to lead with authority and grow your business. Overcome self-doubt, develop a powerful leadership presence, and make bold decisions with unshakeable confidence.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Rapid Transformational Change</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            My unique approach combines life coaching, NLP, and hypnotherapy to help you quickly overcome blocks and create lasting change. We focus on the areas where you need support most.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
              <p className="mt-4 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
