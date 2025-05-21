import React, { useState } from "react";
import { FaClipboardList, FaCheckCircle, FaPhoneVolume, FaMoneyCheckAlt } from "react-icons/fa";

const steps = [
  {
    title: "Apply Online",
    icon: FaClipboardList,
    detailedDescription: "Complete our easy online loan application in just a few minutes.",
    color: "bg-blue-500",
  },
  {
    title: "Get Instant Call",
    icon: FaPhoneVolume,
    detailedDescription: "Our representative will call you immediately to discuss your needs.",
    color: "bg-green-500",
  },
  {
    title: "Loan Approval",
    icon: FaCheckCircle,
    detailedDescription: "Receive quick approval and get funds disbursed to your account.",
    color: "bg-purple-500",
  },
  {
    title: "Disbursal",
    icon: FaMoneyCheckAlt,
    detailedDescription: "Loan amount is credited to your bank account after approval.",
    color: "bg-yellow-500",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleMouseEnter = (index) => setActiveStep(index);
  const handleMouseLeave = () => setActiveStep(null);

  return (
    <div className="py-8 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 font-glacial">How It Works</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center cursor-pointer max-h-[280px] md:max-h-none"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* SVG House */}
            <svg
              viewBox="0 0 64 64"
              className="w-20 h-20 mb-3 drop-shadow-md transition-transform group-hover:scale-105 md:w-40 md:h-40 md:mb-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 4 L4 28 H12 V60 H26 V40 H38 V60 H52 V28 H60 Z"
                fill="none"
                stroke="url(#houseGradient)"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="houseGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4dabf7" />
                  <stop offset="100%" stopColor="#228be6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Icon */}
            <div
              className={`absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-full ${step.color} text-white w-12 h-12 flex items-center justify-center shadow-lg`}
            >
              <step.icon className="w-6 h-6" />
            </div>

            {/* Step Title for Desktop only */}
            <h3 className="hidden md:block text-lg font-bold text-center font-glacial mt-4 mb-4">
              Step {index + 1}: {step.title}
            </h3>

            {/* Hover Description */}
            {activeStep === index && (
              <div className="mt-2 bg-blue-50 text-sm p-3 rounded shadow-inner border border-blue-100 font-glacial transition-opacity duration-300 ease-in-out w-full text-center">
                {step.detailedDescription}
              </div>
            )}

            {/* Step Title for Mobile only, BELOW everything */}
            <h3 className="block md:hidden text-base font-bold text-center font-glacial mt-3">
              Step {index + 1}: {step.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;