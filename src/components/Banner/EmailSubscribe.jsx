import React from "react";

const EmailSubscribe = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">
          Subscribe to My Newsletter
        </h2>

        <p className="text-blue-100 mb-8">
          Get the latest updates on Shopify, Digital Marketing tips, and growth strategies directly to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-white focus:outline-none border border-amber-300"
          />

          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>

        </form>

        {/* Small Note */}
        <p className="text-sm text-blue-200 mt-4">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
};

export default EmailSubscribe;