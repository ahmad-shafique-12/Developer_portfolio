import React from 'react';

export default function ContactData({isSidebarOpen}) {
  return (
    <div className={`min-h-screen w-full bg-[#0A0A0A] text-white p-4 sm:p-8 flex flex-col items-center justify-center font-inter`}>
      <div className="w-full max-w-lg bg-gray-80 p-8 rounded-xl shadow-lg border border-gray-700">
        <h1 className="text-4xl font-bold mb-2 text-gray-100 text-center">Let's Connect</h1>
        <p className="text-gray-400 text-center mb-8">Drop a message in the digital bottle</p>

        <form className="space-y-6">
          {/* Your Name Input */}
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-5 py-3  text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Your Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-5 py-3  text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Your Message Textarea */}
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full px-5 py-3  text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-y"
              required
            ></textarea>
          </div>

          {/* Send Message Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-50 text-gray-900 font-semibold rounded-lg shadow-md hover:from-gray-300 hover:to-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send ml-2">
              <path d="m22 2-7 20-4-9-9-4 20-7Z"/>
              <path d="M15 9l-6 6"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
