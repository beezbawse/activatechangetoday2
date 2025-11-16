
import React from 'react';

const testimonials = [
  {
    quote: "Lori-Ann helped me find my voice again after my divorce. I went from feeling lost and invisible to confident and in control of my future. I can't thank her enough.",
    name: 'Sarah M.',
    title: 'Home Life Client',
  },
  {
    quote: "I was consistently passed over for promotions. The coaching sessions gave me the tools to demonstrate my value and leadership. I finally got the promotion I deserved!",
    name: 'Jennifer P.',
    title: 'Corporate Life Client',
  },
  {
    quote: "As an entrepreneur, I struggled with imposter syndrome. Lori-Ann's guidance was transformative. My business has doubled in revenue because I now lead with genuine confidence.",
    name: 'Christine L.',
    title: 'Entrepreneur Client',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">What My Clients Are Saying</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Real stories of transformation from women just like you.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-3xl text-sky-400">“</div>
              <blockquote className="text-slate-600 text-lg italic">
                {testimonial.quote}
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
