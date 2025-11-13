import React from "react";
import { CheckCircle, CreditCard, FileText, User, Quote } from "lucide-react";
const ExtraSections = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* HOW IT WORKS */}
      <section className="py-12 px-4 md:px-10 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center p-6 shadow-md rounded-xl bg-gray-100 hover:shadow-lg transition-all">
            <User className="w-12 h-12 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">1. Register or Login</h3>
            <p>Securely create your account and log in to access your bills anytime.</p>
          </div>
          <div className="flex flex-col items-center p-6 shadow-md rounded-xl bg-gray-100 hover:shadow-lg transition-all">
            <FileText className="w-12 h-12 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">2. View Monthly Bills</h3>
            <p>Browse your electricity, gas, water, and internet bills in one place.</p>
          </div>
          <div className="flex flex-col items-center p-6 shadow-md rounded-xl bg-gray-100 hover:shadow-lg transition-all">
            <CreditCard className="w-12 h-12 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">3. Pay Securely</h3>
            <p>Pay your current month’s bills easily with secure online payment.</p>
          </div>
          <div className="flex flex-col items-center p-6 shadow-md rounded-xl bg-gray-100 hover:shadow-lg transition-all">
            <CheckCircle className="w-12 h-12 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">4. Download Report</h3>
            <p>Get instant PDF reports of all your paid bills for your records.</p>
          </div>
        </div>
      </section>

      {/* OUR FEATURES */}
      <section className="py-12 px-4 md:px-10 lg:px-20 bg-secondary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          Our Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Secure Online Payments",
              desc: "Your payment data is protected with industry-grade security.",
              icon: <CreditCard className="w-10 h-10 text-black" />,
            },
            {
              title: "Smart Bill Filtering",
              desc: "Filter and find bills by category, date, or amount instantly.",
              icon: <FileText className="w-10 h-10 text-black" />,
            },
            {
              title: "Responsive Dashboard",
              desc: "Access your bills from mobile, tablet, or desktop seamlessly.",
              icon: <User className="w-10 h-10 text-black" />,
            },
            {
              title: "Downloadable Reports",
              desc: "Easily download PDF reports for your payment history.",
              icon: <CheckCircle className="w-10 h-10 text-black" />,
            },
          ].map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 px-4 md:px-10 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Ayesha Rahman",
              feedback:
                "Paying my bills has never been this easy! The system is fast, simple, and reliable.",
            },
            {
              name: "Tanvir Ahmed",
              feedback:
                "I love how I can view all my bills in one dashboard and download reports anytime.",
            },
            {
              name: "Ritu Das",
              feedback:
                "Super convenient! No more late payments — I get reminders and can pay instantly.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-md bg-secondary hover:shadow-lg transition-all"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-3" />
              <p className="italic text-gray-700 mb-4">"{t.feedback}"</p>
              <h4 className="text-sm font-semibold text-blue-600">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExtraSections;
