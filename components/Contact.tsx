
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');
    // In a real application, you would handle form submission here.
    // For this example, we'll simulate a success message.
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setFormStatus('Thank you for your message! I will be in touch shortly.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Ready to Activate Your Change?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Book your free, no-obligation 30-minute session today. Let's explore if this is a good fit for you and start your journey towards a more confident life.
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                placeholder="Tell me a little about what you're looking for..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-sky-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Request My Free Session
              </button>
            </div>
          </form>
          {formStatus && (
            <p className="mt-6 text-center text-slate-600">{formStatus}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
